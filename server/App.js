const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
require("./conn");

const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");
const gigRoute = require("./routes/gig.route");
const orderRoute = require("./routes/order.route");
const conversationRoute = require("./routes/conversation.route");
const messageRoute = require("./routes/message.route");
const reviewRoute = require("./routes/review.route");
const globalErrorHandler = require("./error/globalErrorHandler");
const cors = require("cors");

const app = express();
dotenv.config();

// app.use(
//   cors({
//     origin: "",
//     AccessControlAllowOrigin: true,
//     Credential: true,
//   })
// );
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/gig", gigRoute);
app.use("/api/order", orderRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/message", messageRoute);
app.use("/api/review", reviewRoute);

app.use(globalErrorHandler);

module.exports = app;