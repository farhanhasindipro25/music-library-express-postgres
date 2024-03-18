import { Router } from "express";
import { ArtistsController } from "./artists.controller";

const router = Router();

router.get("/", ArtistsController.getArtists);
router.get("/:id", ArtistsController.getArtistByID);

export const ArtistRoutes = router;
