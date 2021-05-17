const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");

const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "Simple route",
  });
});

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/product", productRouter);

app.listen(3001, console.log("Server Started...!"));
