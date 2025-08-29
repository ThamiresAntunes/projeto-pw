import prisma from "../../prisma/client";

export async function deleteRelatoService(id: string): Promise<void> {
    await prisma.relato.delete({
        where: {
            id: id
        }
    });
}