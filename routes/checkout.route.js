const express = require("express");
const router = express.Router();
const { User } = require("../models/user.model");
const { Cart } = require("../models/carts.model");
const stripeSecretKey = process.env["STRIPE_SECRET_KEY"];
const stripe = require("stripe")(`${stripeSecretKey}`);

router.route("/").post(async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.findById({ _id: userId });
    const userCart = await Cart.findById({ _id: userId }).populate("cart._id");

    const lineItems = userCart.cart.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item._id.name,
          images: [item._id.image],
        },
        unit_amount: item._id.price * 100,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url:
        "https://blendmart.netlify.app/payment-transaction?status=success",
      cancel_url:
        "https://blendmart.netlify.app/payment-transaction?status=failure",
      customer_email: user.email,
    });

    res.json({ success: true, id: session.id, url: session.url });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error });
  }
});

module.exports = router;
