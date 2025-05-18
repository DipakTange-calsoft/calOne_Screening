const express = require("express");
const router = express.Router();
const upload = require("../Configs/multer");
const { processResume } = require("../Controllers/screening.Controller");

router.post("/screening", upload.single("resume"), processResume);

module.exports = router;
