const LOGIN_USER = "SELECT * FROM users WHERE email = ($1)";

export const AuthServices = {
  LOGIN_USER,
};
