import { Router } from "express";
import { AlbumsAndArtistsController } from "./album_artists.controller";

const router = Router();

router.get("/", AlbumsAndArtistsController.getAlbumsAndArtists);

export const AlbumsAndArtistsRoutes = router;
