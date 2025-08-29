import prisma from "../../prisma/client";
import { Relato } from "../../@types/relato";

export async function getRelatosService(): Promise<Relato[]> {
    return await prisma.relato.findMany();
}
