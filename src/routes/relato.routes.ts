import { Router } from "express";
import { createRelatoController } from "../controllers/relato/create-relato.controller";

// middlewares
import { authenticateToken } from "../middlewares/user/authenticate-token";

const router = Router();

// Criar relato (só usuário autenticado pode criar)
router.post("/", authenticateToken, createRelatoController);

export default router;