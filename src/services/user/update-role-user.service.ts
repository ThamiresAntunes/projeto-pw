import prisma from "../../prisma/client";
import { UserUpdate } from "../../@types/user"; 
import { Role } from "@prisma/client";

export async function updateRoleUserService(id: string, newRole: Role): Promise<UserUpdate | null> {
    //verificar se o nome passado na role é permitido
    const allowedRoles: Role[] = ["user", "healthcare", "admin", "admin_master"];

    if (!allowedRoles.includes(newRole)) {
        return null;
    }

    const user = await prisma.user.update({
        where: { 
            id: id
        },
        data: { 
            role: newRole 
        },
    });
    return user;
}