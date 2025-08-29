import prisma from "../../prisma/client";
import { Relato } from "../../@types/relato";

export async function updateRelatoService(id: string, data: Relato): Promise<void> {
    const { title, content } = data;
    await prisma.relato.update({
        where: { id: id },
        data: {
            title,
            content
        }
    })
}
