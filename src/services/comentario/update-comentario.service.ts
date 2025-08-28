import prisma from "../../prisma/client";
import { Comentario } from "@prisma/client";

export async function updateComentarioService(id: string, content: string): Promise<Comentario> {
  return prisma.comentario.update({
    where: { id },
    data: { content },
  });
}