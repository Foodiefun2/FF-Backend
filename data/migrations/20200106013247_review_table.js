exports.up = function(knex) {
  return knex.schema.createTable("reviews", reviews => {
    reviews.increments();

    reviews.string("menu_item").notNullable();

    reviews.string("cuisine");

    reviews.string("price");

    reviews.string("rating", 3).notNullable();

    reviews.string("review").notNullable();

    reviews.string("img").unique();

    reviews
      .integer("foodie_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    reviews
      .integer("restaurant_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("restaurants")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("reviews")
};
