import { Request, Response } from "express";
import pool from "../../../db";
import { AlbumsArtistsInterface } from "./album_info.interface";
import { AlbumAndArtistsServices } from "./album_info.services";

const getAlbumsAndArtists = (req: Request, res: Response) => {
  pool.query(
    AlbumAndArtistsServices.GET_ALBUM_AND_ARTISTS_FROM_DB,
    (error: any, results: AlbumsArtistsInterface) => {
      if (error) res.status(500).send("Internal Server Error");
      console.log("first");
      res.status(200).json(results.rows);
    }
  );
};

export const AlbumsAndArtistsController = {
  getAlbumsAndArtists,
};
