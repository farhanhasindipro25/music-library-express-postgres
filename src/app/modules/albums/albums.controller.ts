import { Request, Response } from "express";
import pool from "../../../db";
import { AlbumsServices } from "./albums.services";
import { albumsInterface } from "./albums.interface";

const getAlbums = (req: Request, res: Response) => {
  pool.query(
    AlbumsServices.GET_ALBUMS_WITH_SONGS_FROM_DB,
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
    AlbumsServices.GET_ALBUM_WITH_SONGS_BY_ID_FROM_DB,
    [id],
    (error: any, results: albumsInterface) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const addAlbum = (req: Request, res: Response) => {
  const { title, release_year, genre, total_songs } = req.body;
  pool.query(
    AlbumsServices.POST_ALBUM_INTO_DB,
    [title, release_year, genre, total_songs],
    (error: any) => {
      if (error) throw error;
      res.status(201).json({
        message: "Album added successfully",
        album: { title, release_year, genre, total_songs },
      });
    }
  );
};

export const AlbumsController = {
  getAlbums,
  getAlbumByID,
  addAlbum,
};
