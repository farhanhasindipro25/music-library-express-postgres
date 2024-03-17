import { Router } from "express";
import { AlbumRoutes } from "../modules/albums/albums.routes";
const router = Router();

const moduleRoutes = [
  {
    path: "/albums",
    route: AlbumRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
