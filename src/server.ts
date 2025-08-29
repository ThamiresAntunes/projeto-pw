import express from "express";
import cors from "cors";
import institutionRouter from "./routes/institution.router";
import userRouter from "./routes/user.router";
import conteudoRouter from "./routes/conteudo.router";
import relatoRouter from "./routes/relato.router";
import comentarioRouter from "./routes/comentario.router"
import path from "path";
import swaggerUi from 'swagger-ui-express'; // 1. Importar swagger-ui
import swaggerSpec from './config/swwagerConfig'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use("/institutions", institutionRouter);
app.use("/users", userRouter);
app.use("/conteudos", conteudoRouter);
app.use("/relatos", relatoRouter);
app.use("/comentarios", comentarioRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
});