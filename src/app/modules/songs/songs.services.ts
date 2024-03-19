const GET_SONGS_WITH_ALBUM_AND_ARTIST_FROM_DB = `SELECT 
    albums.title AS album_title,
    json_agg(json_build_object(
        'song_uid', songs.song_uid,
        'song_title', songs.title,
        'duration', songs.duration,
        'artist_name', artists.name
    )) AS songs
FROM 
    albums
JOIN 
    songs ON albums.album_uid = songs.album_uid
JOIN 
    album_info ON albums.album_uid = album_info.album_uid
JOIN 
    artists ON album_info.artist_uid = artists.artist_uid
GROUP BY 
    albums.title;`;

const GET_SONGS_BY_ID_FROM_DB = `SELECT 
    songs.song_uid,
    songs.title AS song_title,
    songs.duration,
    albums.title AS album_title,
    artists.name AS artist_name
FROM 
    songs
JOIN 
    albums ON songs.album_uid = albums.album_uid
JOIN
    album_info ON albums.album_uid = album_info.album_uid
JOIN
    artists ON album_info.artist_uid = artists.artist_uid
WHERE
    songs.song_uid = $1;`;

const POST_SONG_INTO_DB =
  "INSERT INTO songs (title, duration, album_uid, artist_uid) VALUES ($1, $2, $3, $4)";

export const SongsServices = {
  GET_SONGS_BY_ID_FROM_DB,
  GET_SONGS_WITH_ALBUM_AND_ARTIST_FROM_DB,
  POST_SONG_INTO_DB,
};
