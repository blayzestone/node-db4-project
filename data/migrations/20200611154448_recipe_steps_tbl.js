exports.up = function (knex) {
  return knex.schema.createTable("recipe_steps", (tbl) => {
    tbl.increments();

    tbl.integer("recipe_id").notNullable().references("recipe.id");

    tbl.integer("step_number").notNullable();
    tbl.string("direction", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("recipe_steps");
};
