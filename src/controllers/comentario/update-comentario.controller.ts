import { Request, Response } from "express";
import { getComentarioByIdService } from "../../services/comentario/get-comentario.service";
import { updateComentarioService } from "../../services/comentario/update-comentario.service";

export const updateComentarioController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { comentarioId } = req.params;
    const { content } = req.body;
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

    const updatedComentario = await updateComentarioService(comentarioId, content);
    res.status(200).json(updatedComentario);
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};