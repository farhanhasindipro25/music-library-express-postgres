import { Router } from "express";
import { AlbumRoutes } from "../modules/albums/albums.routes";
import { ArtistRoutes } from "../modules/artists/artists.routes";
import { AlbumsAndArtistsRoutes } from "../modules/album_info/album_info.routes";
import { SongRoutes } from "../modules/songs/songs.routes";
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
    path: "/album-info",
    route: AlbumsAndArtistsRoutes,
  },
  {
    path: "/songs",
    route: SongRoutes,
  },
];

moduleRoutes.forEach((route) => allroutes.use(route.path, route.route));

export default allroutes;
