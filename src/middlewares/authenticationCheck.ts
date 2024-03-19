import jwt, { Secret } from "jsonwebtoken";
import { UserInterface } from "../app/modules/users/users.interface";
import { NextFunction, Request, Response } from "express";

function authenticationCheck(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header not found" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ error: "Token not found in authorization header" });
  }
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET as Secret,
    (error: any, decoded: any) => {
      if (error) {
        return res.status(403).json({ error: error });
      }
      req.user = decoded;
      next();
    }
  );
}

export default authenticationCheck;
