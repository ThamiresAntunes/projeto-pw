import prisma from "../../prisma/client";

export async function listConteudosService() {
  const conteudos = await prisma.conteudoEducativo.findMany({
    orderBy: {
      createdAt: 'desc', // Listar os mais recentes primeiro
    },
    include: {
      author: {
        select: {
          name: true, // Incluir o nome do autor para exibição
        },
      },
    },
  });
  return conteudos;
}