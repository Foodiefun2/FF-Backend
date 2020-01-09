
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {id: 1, name: "Tacobell", cuisine: "Mexican Fastfood", location: "123 Tacobell Street", hours: "7am - 12am", review: "Tacobell is the best food", img: null, foodie_id: 1},
        {id: 2, name: "PastaHouse", cuisine: "Italian", location: "323 Pasta Drive", hours: "9am - 6pm", review: "Never forgetti the spaghetti", img: null, foodie_id: 3},
        {id: 3, name: "CowSteak", cuisine: "American Steakhouse", location: "878 Meat Ave", hours: "9am - 8pm", review: "Biggest, Bestest Steak", img: null, foodie_id: 4},
        {id: 4, name: "Burger King", cuisine: "American Fastfood", location: "111 King's Court", hours: "6am - 11pm", review: "Cheetos and Burgers!", img: null, foodie_id: 5},
        {id: 5, name: "Pizza My Heart", cuisine: "Pizza", location: "9871 Pizzar Ave", hours: "9am - 7pm", review: "Pesta Pizza is yummy", img: null, foodie_id: 6}
      ]);
    });
};
