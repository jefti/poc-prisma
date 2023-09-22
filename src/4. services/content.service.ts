import { contentRepository } from "@/5. repositories/content.repository";
import { Disciplina } from "@prisma/client";

async function selectDisciplinas(){
    const lista = await contentRepository.selectDisciplinasDB();
    return lista;
}
async function createDisciplina(nome:string){
    await contentRepository.createDisciplinaDB(nome);
}

async function selectTopicos(){

}
async function createTopico(){

}
async function createResumo(){

}

export const contentService = {selectDisciplinas, createDisciplina, selectTopicos, createTopico, createResumo};