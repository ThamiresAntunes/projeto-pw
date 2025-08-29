import { Router } from "express";
import { createRelatoController } from "../controllers/relato/create-relato.controller";
import { getRelatosController } from "../controllers/relato/get-relatos.controller";

// middlewares
import { authenticateToken } from "../middlewares/user/authenticate-token";

const router = Router();

// Criar relato (só usuário autenticado pode criar)
router.post("/", authenticateToken, createRelatoController);
// Obter todos os relatos
router.get("/",authenticateToken, getRelatosController);

export default router;