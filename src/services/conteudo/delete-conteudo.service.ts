import prisma from "../../prisma/client";

export async function deleteConteudoService(id: string): Promise<void> {
  await prisma.conteudoEducativo.delete({
    where: { id },
  });
}