import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  service: "gmail",
  auth: {
    user: process.env.MAIL_ID,
    pass: process.env.MAIL_PWD,
  },
});


export const sendMailToCustomer = async (userData) => {


    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.MAIL_ID, // sender address
      to: userData.email, // list of receivers
      subject: "Receipt for your order", // Subject line
      text: "Hello jai this is the receipt for your order", // plain text body
      html: "<b>Hello jai this is the receipt for your order in html</b>", // html body
    });
  
    console.log(info)
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  






