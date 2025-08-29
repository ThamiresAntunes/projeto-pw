import prisma from "../../prisma/client";

export async function listConteudosService() {
  const conteudos = await prisma.conteudoEducativo.findMany({
    orderBy: {
      createdAt: 'desc', 
    },
    include: {
      author: {
        select: {
          name: true, 
        },
      },
    },
  });
  return conteudos;
}