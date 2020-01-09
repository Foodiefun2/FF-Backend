const db = require("../../data/db-config.js");

module.exports = {
  addUser,
  findUser,
  findUserBy,
  findUserById,
  updateUser,
  deleteUser,
  findRestByUser,
  getReviewByUser
};

function findUser() {
  return db("users").select("id", "username", "email", "location");
}

function findUserBy(filter) {
  return db("users").where(filter);
}

async function addUser(user) {
  const [id] = await db("users").insert(user, "id");

  return findUserById(id);
}

function findUserById(id) {
  return db("users")
    .where({ id })
    .first();
}

function deleteUser(id) {
  return db("users")
    .where({ id })
    .del();
}

function updateUser(id, changes) {
  return db("users")
    .where({ id })
    .update(changes, "*");
}

function findRestByUser(id) {
  return db("restaurants")
    .select("*")
    .where("foodie_id", id);
}

function getReviewByUser(id) {
    return db("reviews")
        .select("*")
        .where("foodie_id", id)
}