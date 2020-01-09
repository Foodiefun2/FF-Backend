const db = require("../../data/db-config.js");

module.exports = {
  findRatingById,
  addRating,
  updateRating,
  deleteRating
};

function findRatingById(id) {
  return db("ratings")
    .select("*")
    .where({ id });
}

function addRating(rating) {
  return db("ratings")
    .insert(rating, "id")
    .then(ids => {
      const [id] = ids;

      return findRatingById(id);
    });
}

function updateRating(id, changes) {
  return db("ratings")
    .where({ id })
    .update(changes, "*");
}

function deleteRating(id) {
  return db("ratings")
    .where({ id })
    .del();
}
