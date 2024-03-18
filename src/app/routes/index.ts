import { Router } from "express";
import { AlbumRoutes } from "../modules/albums/albums.routes";
import { ArtistRoutes } from "../modules/artists/artists.routes";
import { AlbumsAndArtistsRoutes } from "../modules/album_artists/album_artists.routes";
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
  {
    path: "/albums-and-artists",
    route: AlbumsAndArtistsRoutes,
  },
];

moduleRoutes.forEach((route) => allroutes.use(route.path, route.route));

export default allroutes;
