const asyncHandler = require("express-async-handler");
const AppError = require("../error/AppError");
const gigModel = require("../models/gig.model");
const Gig = require("../models/gig.model");

const createGig = asyncHandler(async (req, res, next) => {
  if (!req.userId.isSeller) {
    return next(new AppError("Only seller create a gig", 403));
  }

  const newGig = new Gig({
    userId: req.userId._id,
    ...req.body,
  });
  try {
    const savedGig = await newGig.save();
    res.status(200).json(savedGig);
  } catch (error) {
    next(err);
  }
});

const deleteGig = asyncHandler(async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    // console.log("gidId: " + gig.userId);
    // console.log("reqID: " + req.userId._id);

    if (gig.userId.toString() !== req.userId._id.toString()) {
      return next(new AppError("You  cannot delete a  gig", 403));
    }

    await Gig.findByIdAndDelete(req.params.id);
    res.status(201).send("Gig has deleted");
  } catch (error) {
    next(error);
  }
});

const getGig = asyncHandler(async (req, res, next) => {});

const getGigs = asyncHandler(async (req, res, next) => {});

module.exports = { createGig, deleteGig, getGig, getGigs };
