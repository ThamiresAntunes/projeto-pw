import { Request, Response } from "express";
import { getConteudoByIdService } from "../../services/conteudo/get-conteudo.service";
import { updateConteudoService } from "../../services/conteudo/update-conteudo.service";

export const updateConteudoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const loggedUser = req.user;

    const conteudo = await getConteudoByIdService(id);
    if (!conteudo) {
      return res.status(404).json({ error: "Conteúdo não encontrado." });
    }

    // Lógica de permissão: só o autor ou um admin podem editar.
    const isAdmin = loggedUser?.role === 'admin' || loggedUser?.role === 'admin_master';
    if (conteudo.authorId !== loggedUser?.id && !isAdmin) {
      return res.status(403).json({ error: "Acesso negado. Permissão insuficiente." });
    }

    const updatedConteudo = await updateConteudoService(id, req.body);
    return res.status(200).json(updatedConteudo);
  } catch (error) {
    console.error("Erro ao atualizar conteúdo:", error);
    return res.status(500).json({ error: "Erro interno do servidor." });
  }
};