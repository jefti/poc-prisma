import { createQuestao } from "@/2.1 protocols/protocols";
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
    const {pergunta,resposta,idTopico} = req.body as createQuestao;
    return res.send({pergunta,resposta,idTopico});
}
export const questionController = {getQuestionsByDiscipline, getQuestionsByTopic, postQuestion};