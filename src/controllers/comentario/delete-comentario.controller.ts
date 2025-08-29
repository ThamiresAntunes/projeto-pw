import { Request, Response } from "express";
import { getComentarioByIdService } from "../../services/comentario/get-comentario.service";
import { deleteComentarioService } from "../../services/comentario/delete-comentario.service";

export const deleteComentarioController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { comentarioId } = req.params;
    const loggedUser = req.user;

    const comentario = await getComentarioByIdService(comentarioId);
    if (!comentario) {
      res.status(404).json({ error: "Comentário não encontrado." });
      return;
    }

    const isAdmin = loggedUser?.role === 'admin' || loggedUser?.role === 'admin_master';
    if (comentario.authorId !== loggedUser?.id && !isAdmin) {
      res.status(403).json({ error: "Acesso negado. Permissão insuficiente." });
      return;
    }

    await deleteComentarioService(comentarioId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};