exports.up = function (knex) {
  return knex.schema.createTable("ingredient", (tbl) => {
    tbl.increments();

    tbl.string("ingredient_name", 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("ingredient");
};
