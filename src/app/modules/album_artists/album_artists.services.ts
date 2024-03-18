const GET_ALBUM_AND_ARTISTS_FROM_DB =
  "SELECT albums.title, albums.release_year, albums.genre, albums.total_songs, artists.name FROM albums JOIN album_artists ON albums.album_uid = album_artists.album_uid JOIN artists ON album_artists.artist_uid = artists.artist_uid";

export const AlbumAndArtistsServices = {
  GET_ALBUM_AND_ARTISTS_FROM_DB,
};
