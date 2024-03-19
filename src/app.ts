import { Request, Response } from "express";
import express from "express";
import allroutes from "./app/routes/index";

const app = express();
app.use(express.json());
const port = 5000;

app.use("/api/v1", allroutes);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Music Library Server Running");
// });

app.listen(port, () => console.log(`App listening to port ${port}`));
