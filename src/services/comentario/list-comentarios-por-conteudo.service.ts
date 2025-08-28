import prisma from "../../prisma/client";

export async function listComentariosPorConteudoService(conteudoId: string) {
  const comentarios = await prisma.comentario.findMany({
    where: { conteudoId },
    orderBy: { createdAt: 'asc' }, // Mostrar do mais antigo para o mais novo
    include: {
      author: {
        select: { id: true, name: true }, // Incluir o nome e id do autor
      },
    },
  });
  return comentarios;
}