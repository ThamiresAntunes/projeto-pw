import prisma from "../../prisma/client";
import { User } from "../../@types/user";

export async function deleteUserService(id: string): Promise<User> {
    const userDeleted
 = await prisma.user.delete({
        where: {
            id: id,
        },
    });
    return userDeleted;
}