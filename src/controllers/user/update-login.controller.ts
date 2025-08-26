import { Request, Response } from "express";
import { updateLoginService } from "../../services/user/update-login.service";

export const updateLoginController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, email, password} = req.body;

        if(!name && !email && !password) {
            res.status(400).json({ message: "Nenhum campo enviado" });
            return;
        }

        await updateLoginService(id, { name, email, password });
        
        res.status(200).json({ message: "Login de usuário atualizado com sucesso!" });
        return;
        
    } catch (error) {
        console.error("Erro ao atualizar usuário!:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
        return;
    }
} 