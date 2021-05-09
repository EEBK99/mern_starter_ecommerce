const express = require("express");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "Simple route",
  });
});

app.use("/auth", authRouter);
app.use("/product", productRouter);

app.listen(3001, console.log("Server Started...!"));
