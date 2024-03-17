CREATE DATABASE musiclibrary

CREATE TABLE Albums(
    album_uid SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_year INT NOT NULL,
    genre VARCHAR(255) NOT NULL,
    total_songs INT NOT NULL
);