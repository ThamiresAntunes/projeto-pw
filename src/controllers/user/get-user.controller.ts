import { Request, Response } from "express";
import { getIdUserService } from "../../services/user/get-user.service";

export const getIdUserController = async (req: Request, res: Response) => {
    try{
        const { id }  = req.params;
        console.log('ID recebido:', id); 
        const user = await getIdUserService(id);
        if (!user) {
            res.status(404).json({ error: "Usuário não encontrado" });
            return;
        }
        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        });
        return;

    }catch (error) {
        console.error("Erro ao listar o usuário:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
        return;
    }
}