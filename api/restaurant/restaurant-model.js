const db = require("../../data/db-config.js");

module.exports = {
  findRestById,
  addRest,
  updateRest,
  deleteRest
};

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

function getReviewByRest(id) {
    return db("reviews")
        .select("*")
        .join("restaurants", "review.restaurant_id", "restaurant.id")
        .where("restaurant_id", id)
}