import express  from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import router from "./1. routers/index.router";
import { errorHandler } from "./2. middlewares/errorHandler";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandler);

const port: Number = Number(process.env.Port) || 5000;
app.listen(port, ()=>{console.log(`Server running on port ${port}...`)});