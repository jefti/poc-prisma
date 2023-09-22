import { Request, Response } from "express";

async function getDisciplinas(req:Request, res: Response){
    return res.send("Get Disciplinas");
}

async function postDisciplina(req:Request, res: Response){
    return res.send("Post Disciplina");
}

async function getTopicos(req:Request, res: Response){
    return res.send("Get Topicos");
}

async function postTopico(req:Request, res: Response){
    return res.send("Post Topico");
}
async function postResumo(req:Request, res: Response){
    return res.send("Post Resumo");
}

export const contentController = {getDisciplinas,postDisciplina, getTopicos,postTopico,postResumo};