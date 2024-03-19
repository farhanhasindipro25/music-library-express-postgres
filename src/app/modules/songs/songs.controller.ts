import { Request, Response } from "express";
import pool from "../../../db";
import { SongsInterface } from "./songs.interface";
import { SongsServices } from "./songs.services";

const getSongs = (req: Request, res: Response) => {
  pool.query(
    SongsServices.GET_SONGS_WITH_ALBUM_AND_ARTIST_FROM_DB,
    (error: any, results: SongsInterface) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const getSongsByID = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  pool.query(
    SongsServices.GET_SONGS_BY_ID_FROM_DB,
    [id],
    (error: any, results: SongsInterface) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const addSong = (req: Request, res: Response) => {
  const { title, duration, album_uid, artist_uid } = req.body;
  pool.query(
    SongsServices.POST_SONG_INTO_DB,
    [title, duration, album_uid, artist_uid],
    (error: any) => {
      if (error) res.status(500).send("Internal Server Error");
      res.status(201).json({
        message: "Artist added successfully",
        artist: { title, duration, album_uid, artist_uid },
      });
    }
  );
};

export const SongsController = {
  getSongs,
  getSongsByID,
  addSong,
};
