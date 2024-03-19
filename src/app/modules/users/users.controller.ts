import { Request, Response } from "express";
import pool from "../../../db";
import bcrypt from "bcrypt";
import { UsersServices } from "./users.services";

const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    pool.query(UsersServices.POST_USER_TO_DB, [
      username,
      email,
      hashedPassword,
    ]);
    res.status(201).json({
      message: "User registration successful",
      user: {
        username,
        email,
      },
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export const UsersController = {
  registerUser,
};
