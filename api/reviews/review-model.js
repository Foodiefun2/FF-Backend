const db = require("../../data/db-config.js");

module.exports = {
  findReviewById,
  addReview,
  updateReview,
  deleteReview
};

function findReviewById(id) {
  return db("reviews")
    .select("*")
    .where({ id });
}

function addReview(review) {
  return db("reviews")
    .insert(review, "id")
    .then(ids => {
      const [id] = ids;

      return findReviewById(id);
    });
}

function updateReview(id, changes) {
  return db("reviews")
    .where({ id })
    .update(changes, "*");
}

function deleteReview(id) {
  return db("reviews")
    .where({ id })
    .del();
}
