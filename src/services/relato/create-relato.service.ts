import prisma from "../../prisma/client";
import { Relato } from "../../@types/relato";

export async function createRelatoService(data: Relato, userId: string): Promise<void> {
  const { title, content, likes } = data;

  await prisma.relato.create({
    data: {
      title,
      content,
      likes: likes ?? 0, // default se não vier nada
      user: { connect: { id: userId } }
    }
  });
}
