import { Request, Response } from "express";
import { updateLoginService } from "../../services/user/update-login.service";
import { userUpdateSchema } from "../../validations/user/validation-user";

export const updateLoginController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const parsedData = userUpdateSchema.parse(req.body);

    if (Object.keys(parsedData).length === 0) {
        res.status(400).json({ error: "Nenhum campo para atualizar" });
        return;
    }

    const user = await updateLoginService(id, parsedData);

    res.status(200).json({
      mensagem: "Usuário atualizado",
      usuario: { nome: user.name, email: user.email, role: user.role },
    });
    return;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
    return;
  }
};
