const db = require("./connection");

const create = (full_name, username, email, password) =>
  db.one(
    "INSERT INTO users (full_name, username, email, password) VALUES ($1, $2, $3, $4) RETURNING id",
    [full_name, username, email, password]
  );

const findByEmail = (email) =>
  db.oneOrNone("SELECT * FROM users WHERE email=$1", [email]);

const usernameDoesExist = (username) => {
  return db.oneOrNone("SELECT * FROM users WHERE username=$1", [username]);
};

const emailDoesExist = (email) => {
  return db.oneOrNone("SELECT * FROM users WHERE email=$1", [email]);
};

module.exports = {
  create,
  findByEmail,
  usernameDoesExist,
  emailDoesExist,
};
