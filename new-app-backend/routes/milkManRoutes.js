const express = require("express");
const {
  getAllMilkManReport,
  createMilkManReport,
} = require("../controller/milkManController.js");
const router = express.Router();

router.route("/").get(getAllMilkManReport);

router.route("/create").post(createMilkManReport);

module.exports = router;
