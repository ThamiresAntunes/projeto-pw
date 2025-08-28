import prisma from "../../prisma/client";
import { Comentario } from "@prisma/client";

export async function getComentarioByIdService(id: string): Promise<Comentario | null> {
  return prisma.comentario.findUnique({ where: { id } });
}