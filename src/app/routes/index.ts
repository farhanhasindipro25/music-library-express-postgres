import { Router } from "express";
import { AlbumRoutes } from "../modules/albums/albums.routes";
import { ArtistRoutes } from "../modules/artists/artists.routes";
const allroutes = Router();

const moduleRoutes = [
  {
    path: "/albums",
    route: AlbumRoutes,
  },
  {
    path: "/artists",
    route: ArtistRoutes,
  },
];

moduleRoutes.forEach((route) => allroutes.use(route.path, route.route));

export default allroutes;
