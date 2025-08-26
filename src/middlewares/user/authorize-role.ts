import { Request, Response, NextFunction } from 'express';
import { Role } from '../../@types/user';

// Função para autorizar apenas usuários com a role "admin_master"

export const authorizeRoleMaster = (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user) {
        res.status(401).json({ error: 'Usuário não autenticado' });
        return;
    }

    if (user.role !== "admin_master") {
        res.status(403).json({ error: 'Acesso negado. Permissão insuficiente.' });
        return;
    }

    next();
};

export const authorizeRoleAdmin = (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user) {
        res.status(401).json({ error: 'Usuário não autenticado' });
        return;
    }

    if (user.role !== "admin" && user.role !== "admin_master") {
        res.status(403).json({ error: 'Acesso negado. Permissão insuficiente.' });
        return;
    }

    next();
};