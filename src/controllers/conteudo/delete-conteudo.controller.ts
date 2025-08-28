import { Request, Response } from "express";
import { getConteudoByIdService } from "../../services/conteudo/get-conteudo.service";
import { deleteConteudoService } from "../../services/conteudo/delete-conteudo.service";

export const deleteConteudoController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const loggedUser = req.user;

    const conteudo = await getConteudoByIdService(id);
    if (!conteudo) {
      res.status(404).json({ error: "Conteúdo não encontrado." });
      return;
    }

    const isAdmin = loggedUser?.role === 'admin' || loggedUser?.role === 'admin_master';
    if (conteudo.authorId !== loggedUser?.id && !isAdmin) {
      res.status(403).json({ error: "Acesso negado. Permissão insuficiente." });
      return;
    }

    await deleteConteudoService(id);
    res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar conteúdo:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};