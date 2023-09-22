import { createDisciplina, createQuestao, createResumo, createTopico } from "@/2.1 protocols/protocols";
import Joi from "joi";

const disciplinaSchema = Joi.object<createDisciplina>({
    nome: Joi.string().required()
});
const topicoSchema = Joi.object<createTopico>({
    nome: Joi.string().required(),
    idDisciplina: Joi.number().integer().required()
});
const resumoSchema = Joi.object<createResumo>({
    conteudo: Joi.string().required(),
    idTopico: Joi.number().integer().required()
});
const questaoSchema = Joi.object<createQuestao>({
    pergunta: Joi.string().required(),
    resposta: Joi.string().required(),
    idTopico: Joi.string().required()
});
export const schemas = {disciplinaSchema,topicoSchema,resumoSchema,questaoSchema};