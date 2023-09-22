import express from "express";
import { contentController } from "@/3. controllers/content.controller";

const contentRouter = express.Router();
contentRouter.get("/disciplinas", contentController.getDisciplinas);
contentRouter.post("/disciplina", contentController.postDisciplina);

contentRouter.get("/topicos", contentController.getTopicos);
contentRouter.post("/topico", contentController.postTopico);

contentRouter.post("/resumo", contentController.postResumo);

export default contentRouter;