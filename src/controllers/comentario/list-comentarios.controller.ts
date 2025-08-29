import { Request, Response } from "express";
import { listComentariosPorConteudoService } from "../../services/comentario/list-comentarios-por-conteudo.service";

export const listComentariosController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { conteudoId } = req.params;
    const comentarios = await listComentariosPorConteudoService(conteudoId);
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};