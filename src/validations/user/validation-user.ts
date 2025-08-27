import { z } from "zod";

// Schema de validação para usuário
export const userSchema = z.object({
  name: z.string()
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(50, "O nome pode ter no máximo 50 caracteres"),

  email: z.string().email({ message: "E-mail inválido" }),

  password: z.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(20, "A senha pode ter no máximo 100 caracteres"),
});


//Schema para validar formatação dos dados para a atualização do login de user
export const userUpdateSchema = userSchema.partial();

