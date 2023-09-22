import { Disciplina, Questao, Resumo, Topico } from "@prisma/client";
import httpStatus from "http-status";
import { type } from "os";

export type createDisciplina = Omit<Disciplina, "id">;
export type createTopico = Omit<Topico, "id">;
export type createResumo = Omit<Resumo, "id">;
export type createQuestao = Omit<Questao, "id"> & { idTopico: string };;

export type httpError = {
    status: httpStatus.HttpStatus,
    message: string
}