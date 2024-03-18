import { Router } from "express";
import { ArtistsController } from "./artists.controller";

const router = Router();

router.get("/", ArtistsController.getArtists);

export const ArtistRoutes = router;
