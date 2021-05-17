const express = require("express");
const User = require("../model/user");
const router = express.Router();

router.post("/register", async (req, res) => {
  console.log(req.body);
  console.log(req.headers.authorization);
  console.log(req.query);

  const { email, password } = req.body;
  try {
    const user = new User({
      email,
      password,
    });
    await user.save();

    res.json({
      msg: "User Registered!",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      error: "Something unexpected happened!!!",
    });
  }
});

router.post("/login", (req, res) => {
  res.json({
    msg: "User Loggedin",
  });
});

module.exports = router;
