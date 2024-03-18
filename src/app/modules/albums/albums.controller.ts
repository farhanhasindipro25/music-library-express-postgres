import { Request, Response } from "express";
import pool from "../../../db";
import { AlbumsServices } from "./albums.services";
import { albumsInterface } from "./albums.interface";

const getAlbums = (req: Request, res: Response) => {
  pool.query(
    AlbumsServices.GET_ALBUMS_FROM_DB,
    (error: any, results: albumsInterface) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const getAlbumByID = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  pool.query(
    AlbumsServices.GET_ALBUM_BY_ID_FROM_DB,
    [id],
    (error: any, results: albumsInterface) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

export const AlbumsController = {
  getAlbums,
  getAlbumByID,
};
