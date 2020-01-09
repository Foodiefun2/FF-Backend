const db = require("../../data/db-config.js");

module.exports = {
  findRatingById,
  addRating,
  updateRating,
  deleteRating
};

function findRatingById(id) {
  return db("rest_ratings")
    .select("*")
    .where({ id });
}

function addRating(rating) {
  return db("rest_ratings")
    .insert(rating, "id")
    .then(ids => {
      const [id] = ids;

      return findRatingById(id);
    });
}

function updateRating(id, changes) {
  return db("rest_ratings")
    .where({ id })
    .update(changes, "*")
    .then(() => {
        return findRatingById(id);
      });
}

function deleteRating(id) {
  return db("rest_ratings")
    .where({ id })
    .del();
}

