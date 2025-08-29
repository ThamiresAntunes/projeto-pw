import { Request, Response } from "express";
import { getRelatosService } from "../../services/relato/get-relatos.service";

export const getRelatosController = async (req: Request, res: Response) => {
    try {
        const relatos = await getRelatosService();
        res.status(200).json(relatos);
    } catch (error) {
        console.error("Erro ao obter relatos:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
};