CREATE DATABASE musiclibrary

CREATE TABLE Albums(
album_uid SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
release_year INT NOT NULL,
genre VARCHAR(255) NOT NULL,
total_songs INT NOT NULL
);

INSERT INTO Albums (album_uid, title, release_year, genre, total_songs) VALUES (
'Hybrid Theory', 2000, 'Alternative Rock', 10
),(
'Minutes To Midnight', 2005, 'Alternative Rock', 12
)

CREATE TABLE Artists(
artist_uid SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL
);

INSERT INTO album_artists (album_uid, artist_uid) VALUES (1, 1);
INSERT INTO album_artists (album_uid, artist_uid) VALUES (1, 2);

SELECT 
    albums.title, 
    albums.release_year, 
    albums.genre, 
    albums.total_songs, 
    artists.name
FROM albums 
JOIN 
    album_artists ON albums.album_uid = album_artists.album_uid
JOIN 
    artists ON album_artists.artist_uid = artists.artist_uid;
