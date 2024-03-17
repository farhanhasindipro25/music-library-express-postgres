import { Request, Response } from "express";
import express from "express";
const app = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Music Library Server Running");
});

app.listen(port, () => console.log(`App istening to port ${port}`));
