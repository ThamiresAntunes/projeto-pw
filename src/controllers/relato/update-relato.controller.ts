import { Request, Response } from "express";
import { updateRelatoService } from "../../services/relato/update-relato.service";
import { relatoSchema } from "../../validations/relato/validation-relato";

export const updateRelatoController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const parsedData = relatoSchema.parse(req.body);
        await updateRelatoService(id, parsedData);
        res.status(200).json({ message: "Relato atualizado com sucesso!" });
        return;
    } catch (error) {
        console.error("Erro ao atualizar relato:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
        return;
    }
};