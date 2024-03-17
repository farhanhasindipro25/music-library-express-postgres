import { Router } from "express";
import { AlbumRoutes } from "../modules/albums/albums.routes";
const allroutes = Router();

const moduleRoutes = [
  {
    path: "/albums",
    route: AlbumRoutes,
  },
];

moduleRoutes.forEach((route) => allroutes.use(route.path, route.route));

export default allroutes;
