import express from "express";
import { contentController } from "@/3. controllers/content.controller";
import { validateSchema } from "@/2. middlewares/validateSchema";
import { schemas } from "@/2.2 schemas/schema";

const contentRouter = express.Router();
contentRouter.get("/disciplinas", contentController.getDisciplinas);
contentRouter.post("/disciplina", validateSchema(schemas.disciplinaSchema),contentController.postDisciplina);

contentRouter.get("/topicos", contentController.getTopicos);
contentRouter.post("/topico", validateSchema(schemas.topicoSchema),contentController.postTopico);

contentRouter.post("/resumo", validateSchema(schemas.resumoSchema),contentController.postResumo);

export default contentRouter;