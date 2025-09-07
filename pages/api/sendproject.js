import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, phone, message, furniture_name, price, description, id } =
    await req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: "yafetaddisu123@gmail.com",
    subject: "Furniture Design Order Product",
    text: `Name: ${name} \n
          Email: ${email} \n
          Phone: ${phone} \n
          Message: ${message} \n
          Furniture name : ${furniture_name} \n
          furniture Price: ${price}  \n
          furniture description: ${description}\n
          furniture id: ${id} \n`
    ,
  };
  // console.log(mailOptions);
  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(405).end(); // Method Not Allowed
  }
}
