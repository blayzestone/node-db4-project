
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {
          ingredient_name: 'Peanut Butter',
        },
        {
          ingredient_name: 'Jelly',
        },
        {
          ingredient_name: 'Bread',
        },
      ]);
    });
};
