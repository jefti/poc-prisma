import express from "express";
import { questionController } from "@/3. controllers/question.controller";

const questionRouter = express.Router();
questionRouter.get("/questions/disciplina/:disciplina",questionController.getQuestionsByDiscipline);
questionRouter.get("/questions/topico/:topico",questionController.getQuestionsByTopic);
questionRouter.post("/questions",questionController.postQuestion);
export default questionRouter;