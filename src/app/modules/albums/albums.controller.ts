import { Request, Response } from "express";
import pool from "../../../db";

const getAlbums = (req: Request, res: Response) => {
  pool.query("SELECT * FROM albums", (error: any, results: any) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

export const AlbumsController = {
  getAlbums,
};
