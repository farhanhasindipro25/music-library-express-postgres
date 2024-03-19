
const GET_ALBUMS_WITH_SONGS_FROM_DB = `SELECT 
    albums.album_uid,
    albums.title AS album_title,
    albums.release_year,
    albums.genre,
    json_agg(json_build_object(
        'title', songs.title,
        'duration', songs.duration
    )) AS songs
FROM 
    albums
JOIN 
    songs ON albums.album_uid = songs.album_uid
GROUP BY 
    albums.album_uid,albums.title, albums.release_year, albums.genre;`;

const GET_ALBUM_WITH_SONGS_BY_ID_FROM_DB = `
SELECT 
    albums.album_uid,
    albums.title AS album_title,
    albums.release_year,
    albums.genre,
    json_agg(json_build_object(
        'title', songs.title,
        'duration', songs.duration
    )) AS songs
FROM 
    albums
JOIN 
    songs ON albums.album_uid = songs.album_uid
WHERE 
    albums.album_uid = $1
GROUP BY 
    albums.album_uid, albums.title, albums.release_year, albums.genre;`;

const POST_ALBUM_INTO_DB =
  "INSERT into albums (title, release_year, genre, total_songs) VALUES ($1, $2, $3, $4)";

export const AlbumsServices = {
  GET_ALBUMS_WITH_SONGS_FROM_DB,
  GET_ALBUM_WITH_SONGS_BY_ID_FROM_DB,
  POST_ALBUM_INTO_DB,
};
