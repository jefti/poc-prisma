import express from "express";
import { questionController } from "@/3. controllers/question.controller";
import { validateSchema } from "@/2. middlewares/validateSchema";
import { schemas } from "@/2.2 schemas/schema";

const questionRouter = express.Router();
questionRouter.get("/questions/disciplina/:disciplina",questionController.getQuestionsByDiscipline);
questionRouter.get("/questions/topico/:topico",questionController.getQuestionsByTopic);
questionRouter.post("/questions",validateSchema(schemas.questaoSchema),questionController.postQuestion);
export default questionRouter;