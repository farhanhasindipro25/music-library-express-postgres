import { Request, Response } from "express";
import pool from "../../../db";
import { AuthServices } from "./auth.services";
import bcrypt from "bcrypt";
import jwtHelper from "../../../utils/jwtHelper";

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const users = await pool.query(AuthServices.LOGIN_USER, [email]);
    if (users.rows.length === 0)
      res.status(401).json("An account with this email does not exist!");

    const validPassword = await bcrypt.compare(
      password,
      users.rows[0].password
    );

    if (!validPassword) res.status(401).send("Incorrect password");

    let tokens = jwtHelper(users.rows[0]);
    res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
    res.status(201).json(tokens);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const AuthController = { loginUser };
