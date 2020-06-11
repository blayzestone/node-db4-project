const router = require("express").Router();
const db = require("./recipeModel");

module.exports = router;

router.get("/", (req, res) => {
  db.getRecipes().then((recipes) => {
    res.status(200).json(recipes);
  });
});

router.get("/:id/steps", (req, res) => {
  const { id } = req.params;
  db.getInstructions(id).then((steps) => {
    res.status(200).json(steps);
  });
});

router.get("/:id/shop", (req, res) => {
  const { id } = req.params;
  db.getShoppingList(id)
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((error) => res.status(400).json(error));
});
