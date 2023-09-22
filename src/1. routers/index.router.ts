import express from "express";
import contentRouter from "./content.router";
import questionRouter from "./questions.router";

const router = express.Router();
router.use(contentRouter);
router.use(questionRouter)

export default router;