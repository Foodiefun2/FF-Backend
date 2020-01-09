exports.up = function(knex) {
  return knex.schema.createTable("rest_ratings", tbl => {
    tbl.increments();

    tbl.integer("food_rating", 3);

    tbl.integer("drinks_rating", 3);

    tbl.integer("decor_rating", 3);

    tbl.integer("service_rating", 3);

    tbl.integer("cleanliness_rating", 3);

    tbl.string("vibe")

    tbl
      .integer("restaurant_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("restaurants")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

      tbl
      .integer("foodie_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("rest_ratings")
};
