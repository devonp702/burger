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

module.exports = router;