import jwt, { Secret } from "jsonwebtoken";
import { UserInterface } from "../app/modules/users/users.interface";

function jwtHelper(user: UserInterface) {
  const accessToken = jwt.sign(
    user,
    process.env.ACCESS_TOKEN_SECRET as Secret,
    {
      expiresIn: "20s",
    }
  );
  const refreshToken = jwt.sign(
    user,
    process.env.REFRESH_TOKEN_SECRET as Secret,
    {
      expiresIn: "10m",
    }
  );
  return { accessToken, refreshToken };
}

export default jwtHelper;
