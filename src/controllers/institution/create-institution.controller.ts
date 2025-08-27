import { Request, Response } from "express";
import { createInstitutionService } from "../../services/instituicao/create-institution.service";
import { institutionSchema } from "../../validations/institution/validation-institution";

export const createInstitutionController = async ( req: Request, res: Response ) => {

  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ error: "Usuário não autenticado" });
      return;
    }

    const parsedData = institutionSchema.parse({
      name: req.body.name,
      cnpj: req.body.cnpj,
      contact: req.body.contact,
      description: req.body.description,
      positionX: Number(req.body.positionX),
      positionY: Number(req.body.positionY),
    });

    await createInstitutionService(parsedData, userId);

    res.status(201).json({ message: "Instituição criada com sucesso!" });
    return;
  } catch (error) {
    console.error("Erro ao criar instituição:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
    return;
  } 
};
