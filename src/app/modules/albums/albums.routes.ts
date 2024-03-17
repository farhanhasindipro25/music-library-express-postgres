import { Request, Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("ds");
});

export const AlbumRoutes = router;
