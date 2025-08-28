import { Request, Response } from "express";
import { getConteudoByIdService } from "../../services/conteudo/get-conteudo.service";

export const getConteudoByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const conteudo = await getConteudoByIdService(id);
    if (!conteudo) {
      return res.status(404).json({ error: "Conteúdo não encontrado." });
    }
    return res.status(200).json(conteudo);
  } catch (error) {
    console.error("Erro ao buscar conteúdo por ID:", error);
    return res.status(500).json({ error: "Erro interno do servidor." });
  }
};