const express = require("express");
const router = express.Router();
const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const authVerify = require("../middleware/authVerify");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const mySecret =
  "s0gycZ/BVieolE574SbiFL6kO73VTMp3xgiML5ewkxkmYmwI16AsJaqLILJ/Nv7gQKIBeG8M/GzwXJnoquEHmKvGYs4Ksn0ixYprPONlBE+avE7h34BKS7S2LJ++fHLv9J0JNb2qP1TZdOYKx7qyOuqmueR63aF4y364rR2HTXCLoSTyxNHk9f12yNFjixdzdhF8d+sPzhDBfNuPS5wuhVGeBEqsK7xwbo6zmeCHvLcPJPH2UpzC7LlJN4dJK3kCZj7mHzzs5LhDz0tMT4XNi/1kjPNkefo5txC2EHPt14M+6UNLI1Gt31nlRPqSG7Gg7agjXwDMZS3LW3AYHe1lcA==";

router
  .route("/")
  .get(authVerify, async (req, res) => {
    try {
      const { userId } = req.user;
      const user = await User.findById(userId);
      res.json({ success: true, user });
    } catch (error) {
      console.error(error);
    }
  })

  .post(async (req, res) => {
    try {
      let newUser = req.body;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(newUser.password, salt, async function (err, hash) {
          newUser = { ...newUser, password: hash };
          const AddNewUser = new User(newUser);
          const saveUser = await AddNewUser.save();
          res.json({ success: true, saveUser });
        });
      });
    } catch (error) {
      console.log({ error });
      return res.status(409).json({ success: false, message: error });
    }
  });

router.route("/login").post(async (req, res) => {
  try {
    const { email, password } = req.body.user;
    const users = await User.find();
    const userInfo = users.find((user) => user.email === email);
    if (userInfo) {
      bcrypt.compare(password, userInfo.password, function (err, result) {
        if (result) {
          const token = jwt.sign({ userId: userInfo._id }, mySecret, {
            expiresIn: "24hr",
          });
          return res.json({ email, token });
        }
        return res
          .status(403)
          .json({ success: false, message: "incorrect password", err });
      });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "user not found " });
    }
  } catch (error) {
    console.log(error);
  }
});

router
  .route("/address")
  .get(authVerify, async (req, res) => {
    try {
      const { userId } = req.user;
      const user = await User.findById({ _id: userId });
      res.json({ success: true, address: user.address });
    } catch (error) {
      console.log(error);
    }
  })

  .post(authVerify, async (req, res) => {
    try {
      const { userId } = req.user;
      const { newAddress } = req.body;
      const user = await User.findById(userId);
      user.address.push(newAddress);
      await User.findByIdAndUpdate({ _id: userId }, { address: user.address });
      res.json({
        success: true,
        address: user.address[user.address.length - 1],
      });
    } catch (error) {
      console.log(error);
    }
  })

  .delete(authVerify, async (req, res) => {
    try {
      const { userId } = req.user;
      const { addressId } = req.body;
      const user = await User.findById(userId);
      const updatedAddress = user.address.filter(
        (address) => address._id != addressId
      );
      await User.findByIdAndUpdate(
        { _id: userId },
        { address: updatedAddress }
      );
      res.json({ success: true, address: updatedAddress });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
