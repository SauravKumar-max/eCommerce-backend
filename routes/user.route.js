const express = require("express");
const router = express.Router();
const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const authVerify = require("../middleware/authVerify");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const mySecret = process.env["secret"];

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
