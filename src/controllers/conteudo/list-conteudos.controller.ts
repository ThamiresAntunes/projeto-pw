import { Request, Response } from "express";
import { listConteudosService } from "../../services/conteudo/list-conteudos.service";

export const listConteudosController = async (req: Request, res: Response) => {
  try {
    const conteudos = await listConteudosService();
    return res.status(200).json(conteudos);
  } catch (error) {
    console.error("Erro ao listar conteúdos:", error);
    return res.status(500).json({ error: "Erro interno do servidor." });
  }
};