const dotenv = require("dotenv");
const AppError = require("./error/AppError");
dotenv.config();
const app = require("./App");


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

const port = process.env.PORT;

app.all("*", (req, res, next) => {
  return next(new AppError("This router is not available"), 400);
});

app.listen(port, (res, req) => {
  console.log(`server listening on port ${port} `);
});
