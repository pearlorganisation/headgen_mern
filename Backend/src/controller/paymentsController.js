import dotenv from "dotenv";
import Stripe from "stripe";
import { sendMailToCustomer } from "../utils/nodeMailer.js";

dotenv.config();

const stripe = Stripe(process.env.SK_LIVE);

const stripeLinks = [
  {
    price: "$29",
    url: "https://buy.stripe.com/28o14ncfc93C3io6oq",
  },
  {
    price: "$45",
    url: "https://buy.stripe.com/aEU3cva74enWf16147",
  },
  {
    price: "$79",
    url: "https://buy.stripe.com/dR68wP1AydjSf1628c",
  },
];


const stripeDatingLinks = [
  {
    price: "$29",
    url: "https://buy.stripe.com/28o14ncfc93C3io6oq",
  },
  {
    price: "$45",
    url: "https://buy.stripe.com/aEU3cva74enWf16147",
  },
  {
    price: "$79",
    url: "https://buy.stripe.com/dR68wP1AydjSf1628c",
  },
];

export const checkout = async (req, res) => {

  const selectedPlan = JSON.parse(req.body.selectedPlan)

  const stripeLink = stripeLinks.find((e) => selectedPlan.price === e.price);

  if (stripeLink) {
    res.status(200).json({ sessionUrl: `${stripeLink.url}?prefilled_email=${req.body.email}` });
  } else {
    res.status(500).json({ status: false, message: "Pack not found" });
  }
};

export const complete = async (req, res) => {
  const result = Promise.all([
    stripe.checkout.sessions.retrieve(req.query.session_id, {
      expand: ["payment_intent.payment_method"],
    }),
    stripe.checkout.sessions.listLineItems(req.query.session_id),
  ]);

  let userData = {
    email: "jai@pearlorganisation.com",
  };

  sendMailToCustomer(userData).catch(console.error);

  // console.log('successsfool baybee ji!!!',await result)

  res.status(200).json(await result);

  // res.redirect(`${process.env.FRONTEND_URL}/success`)
};

export const cancel = (req, res) => {
  res.redirect(`${process.env.FRONTEND_URL}/cancel`);
};
