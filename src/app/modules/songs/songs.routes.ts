import { Router } from "express";
import { SongsController } from "./songs.controller";
import authenticationCheck from "../../../middlewares/authenticationCheck";

const router = Router();

router.post("/", authenticationCheck, SongsController.addSong);
router.get("/", SongsController.getSongs);
router.get("/:id", SongsController.getSongsByID);

export const SongRoutes = router;
