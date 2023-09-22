import { createDisciplina, createResumo, createTopico } from "@/2.1 protocols/protocols";
import { Request, Response } from "express";

async function getDisciplinas(req:Request, res: Response){
    return res.send("Get Disciplinas");
}

async function postDisciplina(req:Request, res: Response){
    const {nome} = req.body as createDisciplina;
    return res.send(nome);
}

async function getTopicos(req:Request, res: Response){
    return res.send("Get Topicos");
}

async function postTopico(req:Request, res: Response){
    const {nome, idDisciplina} = req.body as createTopico;
    return res.send({nome, idDisciplina});
}
async function postResumo(req:Request, res: Response){
    const {conteudo, idTopico} = req.body as createResumo;
    return res.send({conteudo, idTopico});
}

export const contentController = {getDisciplinas,postDisciplina, getTopicos,postTopico,postResumo};