import prisma from "../../prisma/client";
import { Comentario } from "@prisma/client";

export async function createComentarioService(
  content: string,
  authorId: string,
  conteudoId: string
): Promise<Comentario> {
  const comentario = await prisma.comentario.create({
    data: {
      content,
      author: { connect: { id: authorId } },
      conteudo: { connect: { id: conteudoId } },
    },
  });
  return comentario;
}