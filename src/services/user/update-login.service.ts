import prisma from "../../prisma/client";
import { User } from "../../@types/user";
import { UpdateLoginUser } from "../../@types/user";

export async function updateLoginService(id: string, data: UpdateLoginUser): Promise<User> {
    const user = await prisma.user.update({
        where: {
            id: id
        },

        data: {
            name: data.name,
            email: data.email,
            password: data.password,
        }
    });
    return user;
}