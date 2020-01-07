const db = require("../../data/db-config.js");

module.exports = {
  addUser,
  findUser,
  findUserBy,
  findUserById,
  updateUser,
  deleteUser
};

function findUser() {
  return db("users").select("id", "username", "email", "location");
}

function findUserBy(filter) {
    return db("user").where(filter)
}

async function addUser(user) {
    const [id] = await db("users").insert(user, "id")

    return findUserById(id)
}

function findUserById(id) {
    return db("users")
    .where({id})
    .first()
}