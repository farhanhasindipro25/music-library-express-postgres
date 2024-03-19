import { Router } from "express";
import { ArtistsController } from "./artists.controller";
import authenticationCheck from "../../../middlewares/authenticationCheck";

const router = Router();

router.post("/", authenticationCheck, ArtistsController.addArtist);
router.get("/", ArtistsController.getArtists);
router.get("/:id", ArtistsController.getArtistByID);

export const ArtistRoutes = router;
