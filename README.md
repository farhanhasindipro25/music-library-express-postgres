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

CREATE TABLE album_artists(
uid SERIAL,
album_uid INT REFERENCES albums(album_uid),
artist_uid INT REFERENCES artists(artist_uid),
PRIMARY KEY (album_uid, artist_uid)
);

INSERT INTO album_artists (album_uid, artist_uid) VALUES (1, 1);
INSERT INTO album_artists (album_uid, artist_uid) VALUES (1, 2);

SELECT
uid,
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

CREATE TABLE songs(
song_uid SERIAL,
title VARCHAR(255) NOT NULL,
duration VARCHAR(255) NOT NULL,
album_uid INT REFERENCES albums(album_uid)
);

INSERT INTO songs (title, duration, album_uid,album_title) VALUES ('Papercut','04:03',1,'Hybrid Theory'),('Points of Authority','04:13',1,'Hybrid Theory'),('Runaway','03:03',1,'Hybrid Theory'),('A place for my head','04:43',1,'Hybrid Theory');


INSERT INTO songs (title, duration, album_uid, artist_uid) VALUES 
    ('Papercut', '04:03', 1, 1),
    ('Points of Authority', '04:13', 1, 1),
    ('Runaway', '03:03', 1, 2),
    ('A place for my head', '04:43', 1, 1);

INSERT INTO album_artists (album_uid, artist_uid)
VALUES 
    (1, 1),
    (2, 2);



SELECT 
    album_artists.uid, 
    albums.title,
    albums.release_year,
    albums.genre,
    artists.name
FROM 
    album_artists
JOIN 
    albums ON album_artists.album_uid = albums.album_uid
JOIN 
    artists ON album_artists.artist_uid = artists.artist_uid;


all songs with album title
SELECT 
    songs.song_uid,
    songs.title,
    songs.duration,
    albums.title,
    songs.artist_uid
FROM 
    songs
JOIN 
    albums ON songs.album_uid = albums.album_uid;

all albums with songs in it

SELECT 
    albums.title,
    albums.release_year,
    albums.genre,
    songs.title,
    songs.duration
FROM 
    albums
JOIN 
    songs ON albums.album_uid = songs.album_uid
ORDER BY 
    albums.title, songs.song_uid;  


SELECT 
    album_info.uid, 
    albums.title AS album_title,
    albums.release_year,
    albums.genre,
    artists.name AS artist_name
FROM 
    album_info
JOIN 
    albums ON album_info.album_uid = albums.album_uid
JOIN 
    artists ON album_info.artist_uid = artists.artist_uid;



SELECT 
    songs.song_uid,
    songs.title AS song_title,
    songs.duration,
    albums.title AS album_title,
    songs.artist_uid
FROM 
    songs
JOIN 
    albums ON songs.album_uid = albums.album_uid;


SELECT 
    albums.title AS album_title,
    albums.release_year,
    albums.genre,
    songs.title AS song_title,
    songs.duration
FROM 
    albums
JOIN 
    songs ON albums.album_uid = songs.album_uid
ORDER BY 
    albums.title, songs.song_uid;  


SELECT 
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
    artists ON album_info.artist_uid = artists.artist_uid;
