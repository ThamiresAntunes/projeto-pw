import { Request, Response } from "express";
import { deleteRelatoService } from "../../services/relato/delete-relato.service";

export const deleteRelatoController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const relatos = await deleteRelatoService(id);
        res.status(200).json(relatos);
        return;
    } catch (error) {
        console.error("Erro ao obter relatos:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
        return;
    }
};