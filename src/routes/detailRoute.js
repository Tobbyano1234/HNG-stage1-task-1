const express = require("express");
const { getDetails } = require("../controllers/detailsController");

const router = express.Router();

router.get("/details", getDetails);

module.exports = router;
