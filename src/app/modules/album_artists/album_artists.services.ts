const GET_ALBUM_AND_ARTISTS_FROM_DB =
  "SELECT uid,albums.album_uid, albums.title, albums.release_year, albums.genre, albums.total_songs,artists.artist_uid, artists.name FROM albums JOIN album_artists ON albums.album_uid = album_artists.album_uid JOIN artists ON album_artists.artist_uid = artists.artist_uid";

export const AlbumAndArtistsServices = {
  GET_ALBUM_AND_ARTISTS_FROM_DB,
};
