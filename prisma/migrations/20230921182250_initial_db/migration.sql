-- CreateTable
CREATE TABLE "disciplinas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "disciplinas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "topicos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idDisciplina" INTEGER NOT NULL,

    CONSTRAINT "topicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resumos" (
    "id" SERIAL NOT NULL,
    "conteudo" TEXT NOT NULL,
    "idTopico" INTEGER NOT NULL,

    CONSTRAINT "resumos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopicosDaQuestao" (
    "TopicoId" INTEGER NOT NULL,
    "QuestaoId" INTEGER NOT NULL,

    CONSTRAINT "TopicosDaQuestao_pkey" PRIMARY KEY ("TopicoId","QuestaoId")
);

-- CreateTable
CREATE TABLE "questoes" (
    "id" SERIAL NOT NULL,
    "pergunta" TEXT NOT NULL,
    "resposta" TEXT NOT NULL,

    CONSTRAINT "questoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "resumos_idTopico_key" ON "resumos"("idTopico");

-- AddForeignKey
ALTER TABLE "topicos" ADD CONSTRAINT "topicos_idDisciplina_fkey" FOREIGN KEY ("idDisciplina") REFERENCES "disciplinas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resumos" ADD CONSTRAINT "resumos_idTopico_fkey" FOREIGN KEY ("idTopico") REFERENCES "topicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicosDaQuestao" ADD CONSTRAINT "TopicosDaQuestao_TopicoId_fkey" FOREIGN KEY ("TopicoId") REFERENCES "topicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicosDaQuestao" ADD CONSTRAINT "TopicosDaQuestao_QuestaoId_fkey" FOREIGN KEY ("QuestaoId") REFERENCES "questoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
