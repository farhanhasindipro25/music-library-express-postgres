import { Router } from "express";
import { AlbumsAndArtistsController } from "./album_info.controller";

const router = Router();

router.get("/", AlbumsAndArtistsController.getAlbumsAndArtists);

export const AlbumsAndArtistsRoutes = router;
