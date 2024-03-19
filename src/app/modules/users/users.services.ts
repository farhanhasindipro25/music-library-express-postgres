const POST_USER_TO_DB =
  "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";

export const UsersServices = {
  POST_USER_TO_DB,
};
