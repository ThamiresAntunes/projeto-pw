import { Request, Response } from "express";
import { createConteudoService } from "../../services/conteudo/create-conteudo.service";

export const createConteudoController = async (req: Request, res: Response): Promise<void> => {
  try {
    const authorId = req.user?.id;
    if (!authorId) {
      res.status(401).json({ error: "Usuário não autenticado." });
      return;
    }

    // Os dados do formulário vêm de req.body
    const { title, content, linkUrl } = req.body;

    // O arquivo vem de req.file (graças ao Multer)
    const imageUrl = req.file ? `/files/${req.file.filename}` : undefined;

    const conteudo = await createConteudoService({
      title,
      content,
      linkUrl,
      imageUrl
    }, authorId);
    
    res.status(201).json(conteudo);
  } catch (error) {
    console.error("Erro ao criar conteúdo:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};