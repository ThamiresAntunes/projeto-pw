import { Request, Response } from "express";
import { listConteudosService } from "../../services/conteudo/list-conteudos.service";

export const listConteudosController = async (req: Request, res: Response): Promise<void> => {
  try {
    const conteudos = await listConteudosService();
    res.status(200).json(conteudos);
  } catch (error) {
    console.error("Erro ao listar conteúdos:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};