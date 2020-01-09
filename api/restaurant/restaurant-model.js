const db = require("../../data/db-config.js");

module.exports = {
  findRestById,
  addRest,
  updateRest,
  deleteRest,
  getReviewByRest,
  getRatingByRest,
  getRests
};

function getRests() {
  return db("restaurants");
}

function getRatingByRest(id) {
  return db("ratings")
    .select("*")
    .where("restaurant_id", id);
}

function getReviewByRest(id) {
  return db("reviews")
    .select("*")
    .where("restaurant_id", id);
}

function findRestById(id) {
  return db("restaurants")
    .select("*")
    .where({ id });
}

function addRest(rest) {
  return db("restaurants")
    .insert(rest, "id")
    .then(ids => {
      const [id] = ids;

      return findRestById(id);
    });
}

function updateRest(id, changes) {
  return db("restaurants")
    .where({ id })
    .update(changes, "*");
}

function deleteRest(id) {
  return db("restaurants")
    .where({ id })
    .del();
}
