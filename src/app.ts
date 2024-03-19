import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import allroutes from "./app/routes/index";
import dotenv from "dotenv";
import path from "path";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
const port = 5000;
dotenv.config({ path: path.join(process.cwd(), ".env") });

app.use("/api/v1", allroutes);

app.listen(port, () => console.log(`App listening to port ${port}`));
