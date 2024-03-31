const express = require("express");
const router = express.Router();

router.get("/blogs", (req, res) => {
  res.status(200).json({
    msg: "blogs are live",
  });
});

exports.module = router;
