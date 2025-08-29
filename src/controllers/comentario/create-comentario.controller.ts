import { Request, Response } from "express";
import { createComentarioService } from "../../services/comentario/create-comentario.service";
import { getConteudoByIdService } from "../../services/conteudo/get-conteudo.service"; // 1. IMPORTAR O SERVIÇO DE BUSCA

export const createComentarioController = async (req: Request, res: Response): Promise<void> => {
  try {
    const authorId = req.user?.id;
    const { conteudoId } = req.params;
    const { content } = req.body;

    // --- VALIDAÇÕES ADICIONADAS ---

    // Validação 1: Verificar se o usuário está autenticado
    if (!authorId) {
      res.status(401).json({ error: "Usuário não autenticado." });
      return;
    }

    // Validação 2: Verificar se o conteúdo do comentário foi enviado
    if (!content || content.trim() === "") {
      res.status(400).json({ error: "O conteúdo do comentário não pode ser vazio." });
      return;
    }

    // Validação 3: Verificar se o conteúdo educativo ao qual se está comentando realmente existe
    const conteudoExists = await getConteudoByIdService(conteudoId);
    if (!conteudoExists) {
      res.status(404).json({ error: "Conteúdo educativo não encontrado." });
      return;
    }

    // --- FIM DAS VALIDAÇÕES ---

    // Se todas as validações passarem, cria o comentário
    const comentario = await createComentarioService(content, authorId, conteudoId);
    res.status(201).json(comentario);

  } catch (error) {
    // Adicionar um log mais detalhado do erro no console do servidor para facilitar a depuração
    console.error("Erro detalhado ao criar comentário:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};
