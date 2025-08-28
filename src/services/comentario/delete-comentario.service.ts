import prisma from "../../prisma/client";

export async function deleteComentarioService(id: string): Promise<void> {
  await prisma.comentario.delete({ where: { id } });
}