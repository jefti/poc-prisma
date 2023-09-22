import { createDisciplina, createResumo, createTopico } from "@/2.1 protocols/protocols";
import { contentService } from "@/4. services/content.service";
import { Disciplina } from "@prisma/client";
import { Request, Response } from "express";

async function getDisciplinas(req:Request, res: Response){
    const lista = await contentService.selectDisciplinas();
    return res.send(lista);
}

async function postDisciplina(req:Request, res: Response){
    const {nome} = req.body as createDisciplina;
    await contentService.createDisciplina(nome);
    return res.sendStatus(201);
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