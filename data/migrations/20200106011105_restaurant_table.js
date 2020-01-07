exports.up = function(knex) {
  return knex.schema.createTable("restaurants", restaurants => {
    restaurants.increments();

    restaurants.string("name").notNullable();

    restaurants.string("type_of_cuisine").notNullable();

    restaurants.string("location").notNullable();

    restaurants.string("hours_of_operations").notNullable();

    restaurants.integer("rating", 1).notNullable();

    restaurants.string("review").notNullable()

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
