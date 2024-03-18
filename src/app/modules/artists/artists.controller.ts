import { Request, Response } from "express";
import pool from "../../../db";
import { ArtistsServices } from "./artists.services";
import { artistInterface } from "./artists.interface";

const getArtists = (req: Request, res: Response) => {
  pool.query(
    ArtistsServices.GET_ARTISTS_FROM_DB,
    (error: any, results: artistInterface) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

export const ArtistsController = {
  getArtists,
};
