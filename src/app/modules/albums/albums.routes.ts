import { Router } from "express";
import { AlbumsController } from "./albums.controller";

const router = Router();

router.get("/", AlbumsController.getAlbums);
router.get("/:id", AlbumsController.getAlbumByID);

export const AlbumRoutes = router;
