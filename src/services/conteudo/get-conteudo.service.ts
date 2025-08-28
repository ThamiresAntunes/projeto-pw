import prisma from "../../prisma/client";
import { ConteudoEducativo } from "@prisma/client";

export async function getConteudoByIdService(id: string): Promise<ConteudoEducativo | null> {
  const conteudo = await prisma.conteudoEducativo.findUnique({
    where: { id },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return conteudo;
}