import { z } from "zod";

// Validar dados de instituição
const cnpjRegex = /^\d{14}$|^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}\-?\d{4}$/;

export const institutionSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  cnpj: z.string().regex(cnpjRegex, "CNPJ inválido"),
  contact: z.string().regex(phoneRegex, "Telefone inválido"),
  description: z.string().min(5, "Descrição deve ter pelo menos 5 caracteres"),
  positionX: z.number({ error: "Latitude obrigatória" }),
  positionY: z.number({ error: "Longitude obrigatória" }),
});

