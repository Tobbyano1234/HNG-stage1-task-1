const express = require("express");
const {
  getDetails,
  createOperation,
} = require("../controllers/detailsController");

const router = express.Router();

router.get("/details", getDetails);
router.post("/operation", createOperation);

module.exports = router;
