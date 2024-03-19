import { Router } from "express";
import { AlbumsController } from "./albums.controller";
import authenticationCheck from "../../../middlewares/authenticationCheck";

const router = Router();

router.post("/", authenticationCheck, AlbumsController.addAlbum);
router.get("/", AlbumsController.getAlbums);
router.get("/:id", AlbumsController.getAlbumByID);

export const AlbumRoutes = router;
