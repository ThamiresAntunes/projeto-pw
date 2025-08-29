import { Request, Response } from "express";
import { updateLoginService } from "../../services/user/update-login.service";
import { userUpdateSchema } from "../../validations/user/validation-user";
import { ZodError } from "zod";

export const updateLoginController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const parsedData = userUpdateSchema.parse(req.body);

    if (Object.keys(parsedData).length === 0) {
      return res.status(400).json({ error: "Nenhum campo para atualizar" });
    }

    const user = await updateLoginService(id, parsedData);

    return res.status(200).json({
      mensagem: "Usuário atualizado",
      usuario: { nome: user.name, email: user.email, role: user.role },
    });

  } catch (error) {
    if (error instanceof ZodError) {
      const formatted = error.format();
      
      const errosFormatados: Record<string, string> = {};
      for (const campo in formatted) {
        if (campo !== "_errors") {
          const mensagens = (formatted as any)[campo]._errors;
          if (mensagens && mensagens.length > 0) {
            errosFormatados[campo] = mensagens[0];
          }
        }
      }

      return res.status(400).json({
        error: "Erro de validação",
        details: errosFormatados,
      });
    }

    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
    return;
  }
};