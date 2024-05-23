import dotenv from "dotenv";
import Stripe from "stripe";
import { sendMailToCustomer } from "../utils/nodeMailer.js";
import { uploadFile } from "../utils/cloudinary.js";

dotenv.config();

const stripe = Stripe(process.env.SK_LIVE);

const stripeLinks = [
  {
    price: "$29",
    id: "price_1PJ8tNCvLjbx73iCtOaiKMDR",
  },
  {
    price: "$45",
    id: "price_1PJ8tNCvLjbx73iCtOaiKMDR",
  },
  {
    price: "$79",
    id: "price_1PJ8tNCvLjbx73iCtOaiKMDR",
  },
];


export const checkout = async (req, res) => {
  try {

    // const cloudinaryResult = await uploadFile(req.files)
    const selectedPlan = JSON.parse(req.body.selectedPlan);
    const idx = stripeLinks.findIndex((e) => {
      return e.price == selectedPlan.price;
    });


    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: `${stripeLinks[idx].id}`,
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: req.body.email,
      allow_promotion_codes: true,
      success_url: `${process.env.BASE_URL}/api/v1/payment/complete`,
      cancel_url: `${process.env.BASE_URL}/api/v1/payment/cancel`,
    });

    console.log(session)

    // const paymentLink = await stripe.paymentLinks.retrieve(stripeLinks[idx].id);
    res.status(200).json({
      sessionUrl: `${session.url}`,
    });

  } catch (error) {
    console.error(error)
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

  await sendMailToCustomer(userData).catch(console.error);

  res.redirect(`${process.env.FRONTEND_URL}/success`);
};

export const cancel = (req, res) => {
  res.redirect(`${process.env.FRONTEND_URL}/cancel`);
};
