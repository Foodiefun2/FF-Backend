const db = require("../../data/db-config.js");

module.exports = {
  findRestById,
  addRest,
  updateRest,
  deleteRest,
  getReviewByRest,
  getRatingByRest,
  getRestaurantsWithReviews,
  get
};

function getRatingByRest(id) {
  return db("rest_ratings")
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
    .update(changes, "*")
    .then(() => {
      return findRestById(id)
    })
}

function deleteRest(id) {
  return db("restaurants")
    .where({ id })
    .del();
}

function getRestaurantsWithReviews() {
  let restaurants = db("restaurants");

  let newRestaurantArray = restaurants.map(restaurant => {
    return get(restaurant.id);
  });

  return newRestaurantArray;
}

function get(id) {
  const restaurants = db("restaurants");

  if (id) {
    restaurants.where({ id }).first();

    const promises = [restaurants, getReviewByRest(id), getRatingByRest(id)];

    return Promise.all(promises).then(results => {
      const [restaurant, reviews, ratings] = results;

      if (restaurant) {
        restaurant.reviews = reviews;
        restaurant.ratings = ratings;

        return restaurant;
      } else {
        return null;
      }
    });
  }

  return restaurants;
}
