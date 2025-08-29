import { Request, Response } from "express";
import { createRelatoService } from "../../services/relato/create-relato.service";
import { relatoSchema } from "../../validations/relato/validation-relato";

export const createRelatoController = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ error: "Usuário não autenticado" });
      return;
    }

    const parsedData = relatoSchema.parse({
      title: req.body.title,
      content: req.body.content,
      likes: req.body.likes ? Number(req.body.likes) : 0,
    });

    await createRelatoService(parsedData, userId);

    res.status(201).json({ message: "Relato criado com sucesso!" });
    return;
  } catch (error) {
    console.error("Erro ao criar relato:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
    return;
  }
};
