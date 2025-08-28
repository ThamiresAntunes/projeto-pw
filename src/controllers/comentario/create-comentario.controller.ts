import { Request, Response } from "express";
import { createComentarioService } from "../../services/comentario/create-comentario.service";

export const createComentarioController = async (req: Request, res: Response): Promise<void> => {
  try {
    const authorId = req.user?.id;
    const { conteudoId } = req.params;
    const { content } = req.body;

    if (!authorId) {
      res.status(401).json({ error: "Usuário não autenticado." });
      return;
    }

    const comentario = await createComentarioService(content, authorId, conteudoId);
    res.status(201).json(comentario);
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};