const express = require("express");
const { contactUs } = require("../controllers/ContactUs");
const router = express.Router();

router.post("/form-api", contactUs);

module.exports = router;
