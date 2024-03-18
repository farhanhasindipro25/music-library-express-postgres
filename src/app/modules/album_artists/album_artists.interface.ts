import { albumsInterface } from "../albums/albums.interface";
import { artistInterface } from "../artists/artists.interface";

export interface AlbumArtistsInterface {
  rows: {
    album_uid: number;
    artist_uid: number;
  };
}

export interface AlbumsArtistsInterface {
  rows: { album: albumsInterface; artist: artistInterface };
}
