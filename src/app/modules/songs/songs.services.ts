const GET_SONGS_BY_ID_FROM_DB =
  "SELECT songs.song_uid, songs.title AS song_title, songs.duration, albums.title AS album_title, artists.name AS artist_name FROM songs JOIN albums ON songs.album_uid = albums.album_uid JOIN album_info ON albums.album_uid = album_info.album_uid JOIN artists ON album_info.artist_uid = artists.artist_uid WHERE song_uid=$1";
const GET_SONGS_WITH_ALBUM_AND_ARTIST_FROM_DB =
  "SELECT songs.song_uid, songs.title AS song_title, songs.duration,albums.title AS album_title,artists.name AS artist_name FROM songs JOIN albums ON songs.album_uid = albums.album_uid JOIN album_info ON albums.album_uid = album_info.album_uid JOIN artists ON album_info.artist_uid = artists.artist_uid;";

export const SongsServices = {
  GET_SONGS_BY_ID_FROM_DB,
  GET_SONGS_WITH_ALBUM_AND_ARTIST_FROM_DB,
};
