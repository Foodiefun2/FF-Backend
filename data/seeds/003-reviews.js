
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, menu_item: "Chalupa", cuisine: "Mexican", price: 2.99, rating: 5, review: "Chrunchy, yet soft! Delish!", img: null, foodie_id: 1, restaurant_id: 1},
        {id: 2, menu_item: "Quesadilla", cuisine: "Mexican", price: 4.99, rating: 4.5, review: "Cheesy, yummy!", img: null, foodie_id: 2, restaurant_id: 1},
        {id: 3, menu_item: "Spaghetti", cuisine: "Italian", price: 12.99, rating: 4, review: "Meatballs are sooooo good!", img: null, foodie_id: 3, restaurant_id: 2},
        {id: 4, menu_item: "Cacio e Pepe", cuisine: "Italian", price: 13.99, rating: 5, review: "Creamy goodness, I've never had better", img: null, foodie_id: 3, restaurant_id: 2},
        {id: 5, menu_item: "Rib-eye Steak", cuisine: "American", price: 2.99, rating: 4, review: "The fatcap was so crispy, the steak so juicy", img: null, foodie_id: 4, restaurant_id: 3},
        {id: 6, menu_item: "Whopper", cuisine: "Burger", price: 4.99, rating: 4, review: "It was Great", img: null, foodie_id: 5, restaurant_id: 4},
        {id: 7, menu_item: "Whopper", cuisine: "Burger", price: 4.99, rating: 2, review: "Not the Best", img: null, foodie_id: 1, restaurant_id: 4},
        {id: 8, menu_item: "Pesta Pizza", cuisine: "Pizza", price: 22.99, rating: 5, review: "Yummy yummy, pesto in my tummy", img: null, foodie_id: 6, restaurant_id: 5}
      ]);
    });
};
