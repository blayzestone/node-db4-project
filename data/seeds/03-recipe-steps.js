exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe_steps")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipe_steps").insert([
        {
          recipe_id: 1,
          step_number: 1,
          direction: "Add peanut Butter on one piece of bread.",
        },
        {
          recipe_id: 1,
          step_number: 2,
          direction: "Add jelly on the piece of bread with no peanut butter.",
        },
        {
          recipe_id: 1,
          step_number: 3,
          direction: "Place the two pieces of bread together.",
        },
      ]);
    });
};
