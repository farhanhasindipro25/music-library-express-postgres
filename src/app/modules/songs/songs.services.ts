const GET_SONGS_FROM_DB = "SELECT * FROM songs";
const GET_SONGS_BY_ID_FROM_DB = "SELECT * FROM songs WHERE song_uid = $1";

export const SongsServices = {
  GET_SONGS_FROM_DB,
  GET_SONGS_BY_ID_FROM_DB,
};
