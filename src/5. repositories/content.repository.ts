import prisma from "@/5.1 database/database";

async function selectDisciplinasDB(){
    const disciplinas = await prisma.disciplina.findMany();
    return disciplinas;
}
async function createDisciplinaDB(nome:string){
    await prisma.disciplina.create({
        data:{
            nome
        }
    })
}

async function selectTopicosDB(){

}
async function createTopicoDB(){

}
async function createResumoDB(){

}

export const contentRepository = {selectDisciplinasDB, createDisciplinaDB, selectTopicosDB, createTopicoDB, createResumoDB};