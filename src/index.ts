import express  from "express";
import "express-async-errors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

const port: Number = Number(process.env.Port) || 5000;
app.listen(port, ()=>{console.log(`Server running on port ${port}...`)});