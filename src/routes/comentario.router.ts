import { Router } from "express";
import { authenticateToken } from "../middlewares/user/authenticate-token";
import { createComentarioController } from "../controllers/comentario/create-comentario.controller";
import { listComentariosController } from "../controllers/comentario/list-comentarios.controller";
import { updateComentarioController } from "../controllers/comentario/update-comentario.controller";
import { deleteComentarioController } from "../controllers/comentario/delete-comentario.controller";
import comentarioRouter from "./comentario.router";

const router = Router({ mergeParams: true });

// POST /api/conteudos/:conteudoId/comentarios
router.post("/", authenticateToken, createComentarioController);

// GET /api/conteudos/:conteudoId/comentarios
router.get("/", listComentariosController);

// PUT /api/conteudos/:conteudoId/comentarios/:comentarioId
router.put("/:comentarioId", authenticateToken, updateComentarioController);

// DELETE /api/conteudos/:conteudoId/comentarios/:comentarioId
router.delete("/:comentarioId", authenticateToken, deleteComentarioController);

router.use("/:conteudoId/comentarios", comentarioRouter);

export default router;