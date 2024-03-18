import { Router } from "express";
import { SongsController } from "./songs.controller";

const router = Router();

router.get("/", SongsController.getSongs);
// router.get("/:id", ArtistsController.getArtistByID);

export const SongRoutes = router;
