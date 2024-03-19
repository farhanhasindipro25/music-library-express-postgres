import { Router } from "express";
import { UsersController } from "./users.controller";

const router = Router();

router.post("/", UsersController.registerUser);

export const UserRoutes = router;
