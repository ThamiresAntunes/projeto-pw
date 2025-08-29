import { Router } from "express";
import { authenticateToken } from "../middlewares/user/authenticate-token";
import { authorizeRoleHealthcare } from "../middlewares/user/authorize-role";

import { createConteudoController } from "../controllers/conteudo/create-conteudo.controller";
import { listConteudosController } from "../controllers/conteudo/list-conteudos.controller";
import { getConteudoByIdController } from "../controllers/conteudo/get-conteudo.controller";
import { updateConteudoController } from "../controllers/conteudo/update-conteudo.controller";
import { deleteConteudoController } from "../controllers/conteudo/delete-conteudo.controller";

import comentarioRouter from "./comentario.router";

const router = Router();

// --- Rotas de Conteúdo ---
router.post("/", authenticateToken, authorizeRoleHealthcare, createConteudoController);
router.get("/", listConteudosController);
router.get("/:id", getConteudoByIdController);
router.put("/:id", authenticateToken, updateConteudoController);
router.delete("/:id", authenticateToken, deleteConteudoController);

// --- Rotas de Comentários Aninhadas ---
// Todas as requisições para /:conteudoId/comentarios serão gerenciadas pelo comentarioRouter
router.use("/:conteudoId/comentarios", comentarioRouter);

export default router;