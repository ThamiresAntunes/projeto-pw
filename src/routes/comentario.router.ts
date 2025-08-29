import { Router } from "express";
import { authenticateToken } from "../middlewares/user/authenticate-token";

// Verifique se os caminhos para os controllers estão corretos
import { createComentarioController } from "../controllers/comentario/create-comentario.controller";
import { listComentariosController } from "../controllers/comentario/list-comentarios.controller";
import { updateComentarioController } from "../controllers/comentario/update-comentario.controller";
import { deleteComentarioController } from "../controllers/comentario/delete-comentario.controller";

const router = Router({ mergeParams: true });

// POST /api/conteudos/:conteudoId/comentarios
router.post("/", authenticateToken, createComentarioController);

// GET /api/conteudos/:conteudoId/comentarios
router.get("/", listComentariosController);

// PUT /api/conteudos/:conteudoId/comentarios/:comentarioId
router.put("/:comentarioId", authenticateToken, updateComentarioController);

// DELETE /api/conteudos/:conteudoId/comentarios/:comentarioId
router.delete("/:comentarioId", authenticateToken, deleteComentarioController);

export default router;