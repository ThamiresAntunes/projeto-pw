import { Request, Response } from "express";
import { createConteudoService } from "../../services/conteudo/create-conteudo.service";

export const createConteudoController = async (req: Request, res: Response): Promise<void> => {
  try {
    const authorId = req.user?.id;
    if (!authorId) {
      res.status(401).json({ error: "Usuário não autenticado." });
      return;
    }
    const conteudo = await createConteudoService(req.body, authorId);
    res.status(201).json(conteudo);
  } catch (error) {
    console.error("Erro ao criar conteúdo:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};