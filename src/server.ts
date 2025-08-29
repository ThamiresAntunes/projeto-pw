import express from "express";
import cors from "cors";
import institutionRouter from "./routes/institution.router";
import userRouter from "./routes/user.router";
import relatoRouter from "./routes/relato.routes";

const app = express();

app.use(cors());
app.use(express.json());

//obs: eu coloco uma rota geral tipo app.use("/api"); ou uma pra cada entidade??
app.use("/institutions", institutionRouter);
app.use("/users", userRouter);
app.use("/relatos", relatoRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
});