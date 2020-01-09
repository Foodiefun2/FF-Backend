
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rest_ratings').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('rest_ratings').insert([
        {id: 1, food_rating: 5, drinks_rating: 5, decor_rating: 5, service_rating: 2, cleanliness_rating: 1, vibe: "Cool", restaurant_id: 1, foodie_id: 1},
        {id: 2, food_rating: 4, drinks_rating: 5, decor_rating: 2, service_rating: 2, cleanliness_rating: 2, vibe: "Cool", restaurant_id: 1, foodie_id: 2},
        {id: 3, food_rating: 4, drinks_rating: 3, decor_rating: 4, service_rating: 5, cleanliness_rating: 4, vibe: "Classy", restaurant_id: 2, foodie_id: 3},
        {id: 4, food_rating: 4.5, drinks_rating: 4, decor_rating: 3, service_rating: 3, cleanliness_rating: 3, vibe: "Family", restaurant_id: 3, foodie_id: 4},
        {id: 5, food_rating: 3, drinks_rating: 2, decor_rating: 2, service_rating: 2, cleanliness_rating: 2, vibe: "Quick", restaurant_id: 4, foodie_id: 5},
        {id: 6, food_rating: 4, drinks_rating: 3, decor_rating: 3, service_rating: 2, cleanliness_rating: 2, vibe: "Sloppy", restaurant_id: 4, foodie_id: 1},
        {id: 7, food_rating: 4.5, drinks_rating: 3, decor_rating: 4, service_rating: 2, cleanliness_rating: 5, vibe: "Family", restaurant_id: 5, foodie_id: 6},
      ]);
    });
};
