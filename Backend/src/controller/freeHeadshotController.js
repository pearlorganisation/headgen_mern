import dotenv from "dotenv";
import Stripe from "stripe";
import {
  sendMailToCustomer,
  sendMailToTeamsCustomer,
} from "../utils/nodeMailer.js";
import { uploadFile } from "../utils/cloudinary.js";
import { addUser, deleteUser, getUser } from "../utils/users.js";
import { addCustomer } from "./customersController.js";

dotenv.config();

export const freeHeadshotCheckout = async (req, res) => {

  try {

    const data = {
      body: JSON.stringify(req.body),
      files: JSON.stringify(req.files)
    };

    const user = addUser(data);
    if (user.status) {
        console.log( 'user====', user)
        return 
         const imgUploadResult = await uploadFile(JSON.parse(user.user.files));
        await addCustomer(userData, imgResult?.result);   
    }
  } catch (error) {
    console.error(error);
  }
};

export const complete = async (req, res) => {

  if (user.status) {

    const imgResult = await uploadFile(JSON.parse(user.user.files));
    await addCustomer(user?.user, imgResult?.result);
    if (imgResult) {
      await sendMailToCustomer(user.user, imgResult.result).catch(
        console.error
      );
      const result = deleteUser(req.query.sessionId);
      if (result) {
      
        const userBody = JSON.parse(user.user.body);
        const selectedPlan = JSON.parse(userBody.selectedPlan);
        res.render("payment-success", {
          type: "solo",
          email: userBody.email,
          gender: userBody.gender,
          amount: selectedPlan.price,
          packName: selectedPlan.packName,
          FRONTEND_URL: process.env.FRONTEND_URL,
        });

        // res.redirect(`${process.env.FRONTEND_URL}/success`);
      }
    } else {
      // const result = deleteUser(req.query.sessionId);

      res.render("payment-success", {
        type: "solo",
        userName: userName,
        amount: amount,
        transactionId: transactionId,
      });

      // res.redirect(`${process.env.FRONTEND_URL}/success`);
    }
  } else {
    const result = deleteUser(req.query.sessionId);
    res.send({
      status: false,
      message:
        "There's some error completing this process, kindly go back to main site",
    });
  }
};

export const cancel = (req, res) => {
  const result = deleteUser(req.query.sessionId);
  res.render("payment-failed", {
    FRONTEND_URL: process.env.FRONTEND_URL,
  });
  // res.redirect(`${process.env.FRONTEND_URL}/cancel`);
};

export const teamsCheckout = async (req, res) => {
  try {
    console.log(req.body)
    const teamsData = JSON.parse(req.body.teamsData);
    let price = Number(teamsData.price) * Number(teamsData.users);

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: `${price}`,
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: teamsData.email,
      allow_promotion_codes: true,
      success_url: `${process.env.BASE_URL}/api/v1/payment/teamscomplete?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/api/v1/payment/teamscancel?sessionId={CHECKOUT_SESSION_ID}`,
    });

    const data = {
      body: JSON.stringify(req.body),
      sessionId: session.id,
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

