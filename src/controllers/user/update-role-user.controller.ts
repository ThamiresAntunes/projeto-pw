import { Request, Response } from "express";
import { updateRoleUserService } from "../../services/user/update-role-user.service";


export const updateRoleUserController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { role } = req.body;
        const user = await updateRoleUserService(id, role);
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
        
    }
    catch (error) {
        console.error("Erro ao alterar a role do usuário:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
        return;
    }
    
}