const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/jwt_verifyToken");
const gigController = require("../controllers/gig.controller");

router.post("/", validateToken, gigController.createGig);
router.delete("/:id", validateToken, gigController.deleteGig);
router.get("/single/:id", validateToken, gigController.getGig);
router.get("/", validateToken, gigController.getGigs);

module.exports = router;
