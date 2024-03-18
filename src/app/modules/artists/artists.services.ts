const GET_ARTISTS_FROM_DB = "SELECT * FROM artists";
const GET_ARTIST_BY_ID_FROM_DB = "SELECT * FROM artists WHERE artist_uid = $1";

export const ArtistsServices = {
  GET_ARTISTS_FROM_DB,
  GET_ARTIST_BY_ID_FROM_DB,
};
