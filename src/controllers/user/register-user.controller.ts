import { Request, Response } from "express";
import { registerUserService } from "../../services/user/register-user.service";
import { Role } from "@prisma/client";
import { userSchema } from "../../validations/user/validation-user";
import { ZodError } from "zod";

// Controlador para registrar um novo usuário
export const registerUserController = async (req: Request, res: Response): Promise<void> => {
    try {

        const parsedData = userSchema.parse(req.body);

        const user = await registerUserService( parsedData.name, parsedData.email, parsedData.password );
        res.status(201).json({ mensagem: "Usuário cadastrado", usuario: { nome: user.name, email: user.email, role: user.role } });
        return;
        
    } catch (err) {
        if (err instanceof ZodError) {
            res.status(400).json({
            message: "Erro de validação",
            errors: err.format(),
      });
    }
        console.error("Erro ao registrar usuário:", err);
        res.status(500).json({ message: "Erro interno do servidor" });
        return;
    }
}