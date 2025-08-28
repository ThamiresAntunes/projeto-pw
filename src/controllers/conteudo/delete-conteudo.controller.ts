import { Request, Response } from "express";
import { getConteudoByIdService } from "../../services/conteudo/get-conteudo.service";
import { deleteConteudoService } from "../../services/conteudo/delete-conteudo.service";

export const deleteConteudoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const loggedUser = req.user;

    const conteudo = await getConteudoByIdService(id);
    if (!conteudo) {
      return res.status(404).json({ error: "Conteúdo não encontrado." });
    }

    // Lógica de permissão: só o autor ou um admin podem deletar.
    const isAdmin = loggedUser?.role === 'admin' || loggedUser?.role === 'admin_master';
    if (conteudo.authorId !== loggedUser?.id && !isAdmin) {
      return res.status(403).json({ error: "Acesso negado. Permissão insuficiente." });
    }

    await deleteConteudoService(id);
    return res.status(204).send(); // Resposta de sucesso sem conteúdo.
  } catch (error) {
    console.error("Erro ao deletar conteúdo:", error);
    return res.status(500).json({ error: "Erro interno do servidor." });
  }
};