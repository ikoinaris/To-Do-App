const router = require("express").Router();

router.get("/", (req, res) => {
   console.log("You are in index.js page");
});

module.exports = router;