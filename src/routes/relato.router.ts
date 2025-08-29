import { Router } from "express";
import { createRelatoController } from "../controllers/relato/create-relato.controller";
import { getRelatosController } from "../controllers/relato/get-relatos.controller";
import { getIdRelatosController } from "../controllers/relato/get-id-relato.controller";
import { deleteRelatoController } from "../controllers/relato/delete-relato.controller";

// middlewares
import { authenticateToken } from "../middlewares/user/authenticate-token";

const router = Router();

// Criar relato (só usuário autenticado pode criar)
router.post("/", authenticateToken, createRelatoController);
// Obter todos os relatos
router.get("/",authenticateToken, getRelatosController);
// Obter um relato pelo ID
router.get("/:id",authenticateToken, getIdRelatosController);
// Deletar um relato pelo ID
router.delete("/:id",authenticateToken, deleteRelatoController);

export default router;