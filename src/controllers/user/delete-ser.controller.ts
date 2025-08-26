import { Request, Response } from 'express';
import { deleteUserService } from '../../services/user/delete-user.service';

export const deleteUserController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await deleteUserService(id);
        res.status(200).json({ message: "Usuário deletado com sucesso!", usuario: { nome: user.name, email: user.email, role: user.role } });
        return;
        
    } catch (error) {
        console.error("Erro ao deletar a usuário:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
        return;
    }
    
}