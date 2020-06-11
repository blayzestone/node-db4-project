const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipe").select("*");
}

function getShoppingList(recipe_id) {
  return db({ r: "recipe" })
    .select("name", "ingredient_name", "quantity")
    .join({ ri: "recipe_ingredient" }, "ri.recipe_id", "r.id")
    .join({ i: "ingredient" }, "ri.ingredient_id", "i.id")
    .where("r.id", recipe_id);
}

function getInstructions(recipe_id) {
  return db("recipe_steps")
    .select("step_number", "direction")
    .where({ recipe_id });
}
