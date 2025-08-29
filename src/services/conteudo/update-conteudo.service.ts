import prisma from "../../prisma/client";
import { ConteudoUpdate } from "../../@types/conteudo";
import { ConteudoEducativo } from "@prisma/client";

export async function updateConteudoService(id: string, data: ConteudoUpdate): Promise<ConteudoEducativo> {
  const updatedConteudo = await prisma.conteudoEducativo.update({
    where: { id },
    data,
  });
  return updatedConteudo;
}