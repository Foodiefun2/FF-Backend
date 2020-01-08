exports.up = function(knex) {
  return knex.schema.createTAble("rest_ratings", tbl => {
    tbl.increments();

    tbl.integer("food_rating", 3);

    tbl.integer("drinks_rating", 3);

    tbl.integer("decor_rating", 3);

    tbl.integer("service_rating", 3);

    tbl.integer("cleaniness_rating", 3);

    tbl.string("vibe")

    tbl
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
    return knex.schema.dropTableIfExists("rest_ratings")
};
