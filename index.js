const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const port = process.env.PORT;

const pageNotFound = require("./middleware/pageNotFound");
const internalSeverError = require("./middleware/internalServerError");
const { initializeDBConnection } = require("./db/db.connect");
const authVerify = require("./middleware/authVerify");

const productsRouter = require("./routes/products.route");
const cartsRouter = require("./routes/carts.route");
const wishlistRouter = require("./routes/wishlists.route");
const userRouter = require("./routes/user.route");
const checkoutRouter = require("./routes/checkout.route");

app.use(cors());
app.use(bodyParser.json());

initializeDBConnection();

app.get("/", (req, res) => {
  res.send({ success: true, message: "E-commerce API" });
});

app.use("/products", productsRouter);
app.use("/carts", authVerify, cartsRouter);
app.use("/wishlists", authVerify, wishlistRouter);
app.use("/user", userRouter);
app.use("/checkout", authVerify, checkoutRouter);

// ** Note: DO NOT MOVE (This should be last Route) **
// 404 error route Handler
app.use(pageNotFound);

// 500 server error handler
app.use(internalSeverError);

app.listen(port, () => {
  console.log("server started");
});
