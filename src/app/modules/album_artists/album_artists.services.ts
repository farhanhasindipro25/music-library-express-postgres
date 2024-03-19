const GET_ALBUM_AND_ARTISTS_FROM_DB =
  "SELECT album_info.uid, albums.title AS album_title, albums.release_year, albums.genre, artists.name AS artist_name FROM album_info JOIN albums ON album_info.album_uid = albums.album_uid JOIN artists ON album_info.artist_uid = artists.artist_uid";

export const AlbumAndArtistsServices = {
  GET_ALBUM_AND_ARTISTS_FROM_DB,
};
