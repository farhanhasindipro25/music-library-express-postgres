import { Router } from "express";
import { SongsController } from "./songs.controller";

const router = Router();

router.post("/", SongsController.addSong);
router.get("/", SongsController.getSongs);
router.get("/:id", SongsController.getSongsByID);

export const SongRoutes = router;
