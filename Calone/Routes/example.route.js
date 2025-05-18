const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello, Express Laudu Sandeep!");
});

router.post("/", (req, res) => {
  const pdf = req.body.pdf;
  res.send(pdf);
});

module.exports = router;
