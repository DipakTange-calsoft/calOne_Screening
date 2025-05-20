const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello, Express Deep!");
});


module.exports = router;
