const express = require("express");
const router = express.Router();

router.get("/t", (req, res) => {
  res.send("hello server is alive ");
});

module.exports = router;