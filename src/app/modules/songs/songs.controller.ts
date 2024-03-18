import { Request, Response } from "express";
import pool from "../../../db";
import { SongsInterface } from "./songs.interface";
import { SongsServices } from "./songs.services";

const getSongs = (req: Request, res: Response) => {
  pool.query(
    SongsServices.GET_SONGS_FROM_DB,
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

export const SongsController = {
  getSongs,
  getSongsByID,
};
