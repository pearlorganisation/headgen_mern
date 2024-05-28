import dotenv from "dotenv";
import Stripe from "stripe";
import { sendMailToCustomer } from "../utils/nodeMailer.js";
import { uploadFile } from "../utils/cloudinary.js";
import { addUser, deleteUser, getUser } from "../utils/users.js";
import { addCustomer } from "./customersController.js";

dotenv.config();

const stripe = Stripe(process.env.SK_LIVE);

const stripeLinks = [
  {
    price: "$29",
    packName: "Starter Pack",
    id: "price_1PKz3ECvLjbx73iC7xja49ep",
  },
  {
    price: "$45",
    packName: "Basic Pack",
    id: "price_1PKz2rCvLjbx73iCKkVyrJIO",
  },
  {
    price: "$79",
    packName: "Premium Pack",
    id: "price_1PJ8tNCvLjbx73iCtOaiKMDR",
  },
  {
    price: "$50",
    packName: "Basic Pack",
    id: "price_1PKz3lCvLjbx73iChXgMZv2H",
  },
  {
    price: "$100",
    packName: "Premium Pack",
    id: "price_1PKz3lCvLjbx73iChXgMZv2H",
  },
  {
    price: "$200",
    packName: "Prompts Pack",
    id: "price_1PKz48CvLjbx73iCaqqHpJ5a",
  },
];

export const checkout = async (req, res) => {
  // console.log(req.body)
  // return
  try {
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
      mode: "payment",
      customer_email: req.body.email,
      allow_promotion_codes: true,
      success_url: `${process.env.BASE_URL}/api/v1/payment/complete?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/api/v1/payment/cancel?sessionId={CHECKOUT_SESSION_ID}`,
    });

    const data = {
      body: JSON.stringify(req.body),
      files: JSON.stringify(req.files),
      sessionId: session.id,
      stripeLink: stripeLinks[idx],
    };

    const user = addUser(data);
    if (user.status) {
      res.status(200).json({
        sessionUrl: `${session.url}`,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const complete = async (req, res) => {
  const user = getUser(req.query.sessionId);

  if (user.status) {
    // console.log(user?.user)
    const imgResult = await uploadFile(JSON.parse(user.user.files));
    await addCustomer(user?.user, imgResult?.result);
    if (imgResult) {
      await sendMailToCustomer(user.user, imgResult.result).catch(console.error);
      const result = deleteUser(req.query.sessionId);
      if (result) {
        res.redirect(`${process.env.FRONTEND_URL}/success`);
      }
    } else {
      // const result = deleteUser(req.query.sessionId);
      res.redirect(`${process.env.FRONTEND_URL}/success`);
    }
  } else {
    const result = deleteUser(req.query.sessionId);
    res.send({ status: false, message: "error completing process" });
  }
};

export const cancel = (req, res) => {
  console.log('cancelling')
  const result = deleteUser(req.query.sessionId);
  res.redirect(`${process.env.FRONTEND_URL}/cancel`);
};