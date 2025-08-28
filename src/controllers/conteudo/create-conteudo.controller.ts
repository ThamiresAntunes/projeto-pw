import { Request, Response } from "express";
import { createConteudoService } from "../../services/conteudo/create-conteudo.service";

export const createConteudoController = async (req: Request, res: Response) => {
  try {
    const authorId = req.user?.id;
    if (!authorId) {
      return res.status(401).json({ error: "Usuário não autenticado." });
    }
    const conteudo = await createConteudoService(req.body, authorId);
    return res.status(201).json(conteudo);
  } catch (error) {
    console.error("Erro ao criar conteúdo:", error);
    return res.status(500).json({ error: "Erro interno do servidor." });
  }
};