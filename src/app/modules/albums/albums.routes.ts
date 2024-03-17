import { Router } from "express";
import { AlbumsController } from "./albums.controller";

const router = Router();

router.get("/", AlbumsController.getAlbums);

export const AlbumRoutes = router;
