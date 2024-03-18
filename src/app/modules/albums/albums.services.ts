const GET_ALBUMS_FROM_DB = "SELECT * FROM albums";
const GET_ALBUM_BY_ID_FROM_DB = "SELECT * FROM albums WHERE album_uid = $1";

export const AlbumsServices = {
  GET_ALBUMS_FROM_DB,
  GET_ALBUM_BY_ID_FROM_DB,
};
