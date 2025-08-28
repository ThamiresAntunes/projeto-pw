import prisma from "../../prisma/client";
import { ConteudoCreate } from "../../@types/conteudo";
import { ConteudoEducativo } from "@prisma/client";

export async function createConteudoService(data: ConteudoCreate, authorId: string): Promise<ConteudoEducativo> {
  const newConteudo = await prisma.ConteudoEducativo.create({
    data: {
      ...data,
      author: {
        connect: { id: authorId },
      },
    },
  });
  return newConteudo;
}