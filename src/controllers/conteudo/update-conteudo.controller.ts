import { Request, Response } from "express";
import { getConteudoByIdService } from "../../services/conteudo/get-conteudo.service";
import { updateConteudoService } from "../../services/conteudo/update-conteudo.service";
  
export const updateConteudoController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const loggedUser = req.user;

    const conteudo = await getConteudoByIdService(id);
    if (!conteudo) {
      res.status(404).json({ error: "Conteúdo não encontrado." });
      return;
    }

    const isAdmin = loggedUser?.role === 'admin' || loggedUser?.role === 'admin_master';
    if (conteudo.authorId !== loggedUser?.id && !isAdmin) {
      res.status(403).json({ error: "Acesso negado. Permissão insuficiente." });
      return;
    }

    const { title, content, linkUrl } = req.body;
    const imageUrl = req.file ? `/files/${req.file.filename}` : undefined;

    const updatedConteudo = await updateConteudoService(id, {
      title,
      content,
      linkUrl,
      imageUrl
    });

    res.status(200).json(updatedConteudo);
  } catch (error) {
    console.error("Erro ao atualizar conteúdo:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};
