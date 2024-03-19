import { Router } from "express";
import { AlbumsController } from "./albums.controller";

const router = Router();

router.post("/", AlbumsController.addAlbum);
router.get("/", AlbumsController.getAlbums);
router.get("/:id", AlbumsController.getAlbumByID);

export const AlbumRoutes = router;
