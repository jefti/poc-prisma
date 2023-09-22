import { Request, RequestHandler, Response } from "express";

async function getQuestionsByDiscipline(req: Request, res:Response){
    const {disciplina}= req.params;
    return res.send(disciplina);
}

async function getQuestionsByTopic(req: Request, res:Response){
    const {topico}= req.params;
    return res.send(topico);
}
async function postQuestion(req: Request, res:Response){
    return res.send("post question");
}
export const questionController = {getQuestionsByDiscipline, getQuestionsByTopic, postQuestion};