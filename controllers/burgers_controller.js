const express= require("express");
const router = express.Router();
const burger = require("../models/burger.js");
/* Create the `router` for the app, and export the `router` at the end of your file.
 */
router.get("/", function(req, res) {
  burger.all(function(data) {
    var expObj ={
      burgers: data
    };
    console.log(expObj);
    res.render("index", expObj);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devour],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});


router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: 1,
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;