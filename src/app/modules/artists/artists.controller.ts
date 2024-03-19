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

const getArtistByID = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  pool.query(
    ArtistsServices.GET_ARTIST_BY_ID_FROM_DB,
    [id],
    (error: any, results: artistInterface) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const addArtist = (req: Request, res: Response) => {
  const { name } = req.body;
  pool.query(ArtistsServices.POST_ARTIST_INTO_DB, [name], (error: any) => {
    if (error) res.status(500).send("Internal Server Error");
    res.status(201).json({
      message: "Artist added successfully",
      artist: name,
    });
  });
};

export const ArtistsController = {
  getArtists,
  getArtistByID,
  addArtist,
};
