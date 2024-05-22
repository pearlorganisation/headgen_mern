import dotenv from "dotenv";
import Stripe from "stripe";
import { sendMailToCustomer } from "../utils/nodeMailer.js";
import { uploadFile } from "../utils/cloudinary.js";

dotenv.config();

const stripe = Stripe(process.env.SK_LIVE);

const stripeLinks = [
  {
    price: "$29",
    id: "plink_1PJAibCvLjbx73iCLq1rAhAB",
  },
  {
    price: "$45",
    id: "plink_1PJAibCvLjbx73iCLq1rAhAB",
  },
  {
    price: "$79",
    id: "plink_1PJAibCvLjbx73iCLq1rAhAB",
  },
];


export const checkout = async (req, res) => {
  try {

    // const cloudinaryResult = await uploadFile(req.files)
    const selectedPlan = JSON.parse(req.body.selectedPlan);
    const idx = stripeLinks.findIndex((e) => {
      return e.price == selectedPlan.price;
    });
    const paymentLink = await stripe.paymentLinks.retrieve(stripeLinks[idx].id);
    res.status(200).json({
      sessionUrl: `${paymentLink.url}?prefilled_email=${req.body.email}`,
    });

  } catch (error) {
    res.json({
      error: error,
    });
  }

  // const stripeLink = stripeLinks.find((e) => selectedPlan ``.price === e.price);
  // res.redirect(`${paymentLink.url}?prefilled_email=${req.body.email}`);
  // if (stripeLink) {
  //   res.status(200).json({ sessionUrl: `${stripeLink.url}?prefilled_email=${req.body.email}` });
  // } else {
  //   res.status(500).json({ status: false, message: "Pack not found" });
  // }
};

export const complete = async (req, res) => {
  console.log(req);
  // const result = Promise.all([
  //   stripe.checkout.sessions.retrieve(req.query.session_id, {
  //     expand: ["payment_intent.payment_method"],
  //   }),
  //   stripe.checkout.sessions.listLineItems(req.query.session_id),
  // ]);

  let userData = {
    email: "jai@pearlorganisation.com",
  };

  await sendMailToCustomer(userData).catch(console.error);

  res.redirect(`${process.env.FRONTEND_URL}/success`);
};

export const cancel = (req, res) => {
  res.redirect(`${process.env.FRONTEND_URL}/cancel`);
};
