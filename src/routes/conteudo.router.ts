import { Router } from "express";
import { authenticateToken } from "../middlewares/user/authenticate-token";
import { authorizeRoleHealthcare } from "../middlewares/user/authorize-role";

import { createConteudoController } from "../controllers/conteudo/create-conteudo.controller";
import { listConteudosController } from "../controllers/conteudo/list-conteudos.controller";
import { getConteudoByIdController } from "../controllers/conteudo/get-conteudo.controller";
import { updateConteudoController } from "../controllers/conteudo/update-conteudo.controller";
import { deleteConteudoController } from "../controllers/conteudo/delete-conteudo.controller";

const router = Router();

// Rota para criar um novo conteúdo (protegida)
router.post(
  "/",
  authenticateToken,
  authorizeRoleHealthcare, // Garante que o usuário é no mínimo 'healthcare'
  createConteudoController
);

// Rotas públicas para visualização
router.get("/", listConteudosController);
router.get("/:id", getConteudoByIdController);

// Rotas para atualizar e deletar (protegidas por autenticação)
router.put("/:id", authenticateToken, updateConteudoController);
router.delete("/:id", authenticateToken, deleteConteudoController);

export default router;