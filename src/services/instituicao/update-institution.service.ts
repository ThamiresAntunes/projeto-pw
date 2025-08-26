import prisma from "../../prisma/client";
import { InstitutionUpdate } from "../../@types/instituicao";

export async function updateInstitutionService( id: string, data: InstitutionUpdate ): Promise<void> {
  const { name, contact, description, positionX, positionY } = data;
  await prisma.instituicao.update({
    where: { id: id },
    data: {
        name,
        contact,
        description
        }
    });

}
