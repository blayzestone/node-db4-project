exports.up = function (knex) {
  return knex.schema.createTable("recipe_ingredient", (tbl) => {
    tbl.increments();

    // foreign keys
    tbl.integer("recipe_id").notNullable().unsigned().references("recipe.id");
    tbl
      .integer("ingredient_id")
      .notNullable()
      .unsigned()
      .references("ingredient.id");

    tbl.integer("quantity").notNullable().unsigned();
  });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists("recipe_ingredient");
};
