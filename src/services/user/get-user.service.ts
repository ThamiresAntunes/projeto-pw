import prisma from "../../prisma/client";
import { User } from "@prisma/client";


export async function getIdUserService(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    return user;
}