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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({
        error: "Invalid Email! ",
      });
    }

    console.log(user);

    if (password == user.password) {
      res.json({
        msg: "Password Matched!",
      });
    } else {
      res.json({ msg: "Invalid Password!" });
    }

    res.json({
      msg: "User Loggedin",
    });
  } catch (error) {
    console.log("Something Unexpected Happened!", error.message);
    return res.json({
      error: "Server Error!",
    });
  }
});

module.exports = router;
