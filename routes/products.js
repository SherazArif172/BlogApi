const express = require("express");
const router = express.Router();
const blogs = require("../controllers/controllers");

router.route("/").get(blogs);

module.exports = router;
