CREATE DATABASE musiclibrary;

-- Create Albums Table
CREATE TABLE Albums (
    album_uid SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_year INT NOT NULL,
    genre VARCHAR(255) NOT NULL,
    total_songs INT NOT NULL
);

-- Insert Data into Albums Table (Adding music albums to the library)
INSERT INTO Albums (title, release_year, genre, total_songs) VALUES 
    ('Hybrid Theory', 2000, 'Alternative Rock', 10),
    ('Meteora', 2003, 'Alternative Rock', 13),
    ('Minutes To Midnight', 2007, 'Alternative Rock', 12),
    ('A Thousand Suns', 2010, 'Alternative Rock', 15),
    ('Living Things', 2012, 'Alternative Rock', 12),
    ('The Hunting Party', 2014, 'Alternative Rock', 12),
    ('One More Light', 2017, 'Pop Rock', 10),
    ('A Thousand Suns Live Around the World', 2021, 'Alternative Rock', 16), 
    ('Foo Fighters', 1995, 'Alternative Rock', 12),
    ('The Colour and the Shape', 1997, 'Alternative Rock', 13),
    ('There Is Nothing Left to Lose', 1999, 'Alternative Rock', 11),
    ('One by One', 2002, 'Alternative Rock', 11),
    ('In Your Honor', 2005, 'Alternative Rock', 20),
    ('Echoes, Silence, Patience & Grace', 2007, 'Alternative Rock', 12),
    ('Wasting Light', 2011, 'Alternative Rock', 11),
    ('Sonic Highways', 2014, 'Alternative Rock', 8),
    ('Concrete and Gold', 2017, 'Alternative Rock', 11),
    ('Medicine at Midnight', 2021, 'Alternative Rock', 9);

-- Get all albums data
SELECT * FROM albums;

-- Get information of one album
SELECT * FROM albums WHERE album_uid=1;

-- Create Artists Table
CREATE TABLE Artists (
    artist_uid SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Insert Data into Artists Table (Adding artists)
INSERT INTO Artists (name) VALUES 
    ('Chester Bennington'),
    ('Mike Shinoda'),
    ('Brad Delson'),
    ('Dave "Phoenix" Farrell'),
    ('Joe Hahn'),
    ('Rob Bourdon'),
    ('Dave Grohl'),
    ('Nate Mendel'),
    ('Pat Smear'),
    ('Chris Shiflett'),
    ('Taylor Hawkins');


-- Get all artists data
SELECT * FROM artists;

-- Get information of one artist
SELECT * FROM artists WHERE artist_uid=1;

-- Create Songs Table
CREATE TABLE songs (
    song_uid SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    duration VARCHAR(255) NOT NULL,
    album_uid INT REFERENCES albums(album_uid),
    artist_uid INT REFERENCES artists(artist_uid)
);

-- Insert Data into Songs Table (Adding individual songs to the library)
INSERT INTO songs (title, duration, album_uid, artist_uid) VALUES 
    ('Papercut', '04:03', 1,2),
    ('Points of Authority', '04:13', 1,2),
    ('Runaway', '03:03', 1,2),
    ('A place for my head', '04:43', 1,2),
    ('One Step Closer', '02:37', 1,2),
    ('With You', '03:23', 1,2),
    ('Crawling', '03:29', 1,2),
    ('By Myself', '03:09', 1,2),
     ('The Requiem', '02:01', 6,2),
    ('The Radiance', '00:57', 6,2),
    ('Burning in the Skies', '04:13', 6,2),
    ('Empty Spaces', '00:18', 6,2),
    ('When They Come for Me', '04:55', 6,1),
    ('Robot Boy', '04:29', 6,3),
    ('Jornada del Muerto', '01:34', 6,4),
    ('Waiting for the End', '03:51', 6,3),
    ('Blackout', '04:39', 6,2),
    ('Wretches and Kings', '04:15', 6,1),
    ('Wisdom, Justice, and Love', '01:39', 6,2),
    ('Iridescent', '04:57', 6,1),
    ('Fallout', '01:23', 6,3),
    ('The Catalyst', '05:41', 6,4),
    ('The Messenger', '03:01', 6,5),
    ('The Pretender', '04:29', 16, 7),
    ('Let It Die', '04:05', 16, 8),
    ('Erase/Replace', '04:12', 16, 9),
    ('Long Road to Ruin', '03:48', 16, 10),
    ('Come Alive', '05:10', 16, 11),
    ('Stranger Things Have Happened', '05:21', 16, 7),
    ('Cheer Up, Boys (Your Make Up Is Running)', '03:41', 16, 8),
    ('Summers End', '04:37', 16, 9),
    ('Ballad of the Beaconsfield Miners', '02:32', 16, 10),
    ('Statues', '03:47', 16, 7),
    ('But, Honestly', '04:36', 16, 8),
    ('Home', '04:53', 16, 9);

-- Get all songs data
SELECT * FROM songs;

-- Get information of one song
SELECT * FROM songs WHERE song_uid=1;

-- Create album_artists Table (Many-to-Many Relationship)
CREATE TABLE album_info (
    uid SERIAL,
    album_uid INT REFERENCES albums(album_uid),
    artist_uid INT REFERENCES artists(artist_uid),
    PRIMARY KEY (album_uid, artist_uid)
);

-- Insert Data into album_info Table
INSERT INTO album_info (album_uid, artist_uid) VALUES (1, 1), (1, 2);

-- Get albums with associated artists
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

-- Get all songs with album title and artist title
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

-- Get all albums and the songs of the album
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

-- Get information about one album and its songs
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
WHERE 
    albums.album_uid=1
ORDER BY 
    songs.song_uid;  
