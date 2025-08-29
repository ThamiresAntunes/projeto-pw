import prisma from "../../prisma/client";
import { Relato } from "../../@types/relato";
import { ObjectId } from "bson";

export async function getIdRelatoService(id: string): Promise<Relato | null> {
    try {
        const objectId = new ObjectId(id);

        const relato = await prisma.relato.findUnique({
            where: { id: objectId.toHexString() },
        });

        return relato;
    } catch (error) {
        console.error("Erro ao listar o relato:", error);
        throw  error;
    }
}