import prisma from "../../prisma/client";
import { User } from "../../@types/user";

// Lista todos os usuários com as instituições que cada um criou
export async function listUsersService(): Promise<Omit<User, "password">[]> {
  const users = await prisma.user.findMany({
    include: {
      instituicoes: {
        select: {
          name: true,
        },
      },
    },
  });

  return users.map(({ password, ...rest }) => rest);
}
