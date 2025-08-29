import { z } from "zod";

export const relatoSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  content: z.string().min(1, "Conteúdo é obrigatório"),
  likes: z.number().optional()
});
