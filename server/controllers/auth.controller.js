const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const AppError = require("../error/AppError");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const sendCookie = require("../utils/sendCookie");

const register = asyncHandler(async (req, res, next) => {
  try {
    const newUser = new User({
      ...req.body,
    });

    await newUser.save();

    res.status(201).send("User has been created.");
  } catch (err) {
    // res.status(400).send("Something went wrong",);
    next(new AppError(err, 401));
  }
});

const login = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(new AppError("User not found", 404));
    const isCorrectPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isCorrectPassword)
      return next(new AppError("Invalid userName OR Password", 404));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_SECRET
    );

    const { password, ...info } = user._doc;

    sendCookie(user, 201, res);
  } catch (error) {
    next(new AppError(error, 401));
  }
});

const logout = asyncHandler(async (req, res, next) => {
  res
    .clearCookie("token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("Logged out successfully.");
});

module.exports = { register, login, logout };
