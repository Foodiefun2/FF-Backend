exports.up = function(knex) {
  return knex.schema.createTable("restaurants", restaurants => {
    restaurants.increments();

    restaurants.string("name").notNullable();

    restaurants.string("cuisine").notNullable();

    restaurants.string("location").notNullable();

    restaurants.string("hours")

    restaurants.string("review")

    restaurants.string("img").unique();

    restaurants
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
    return knex.schema.dropTableIfExists("restaurants")
};
