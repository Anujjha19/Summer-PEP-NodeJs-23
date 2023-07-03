const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vamsitupakula474@gmail.com",
    pass: "bkihokdgxzolkilj",
  },
});

const mailOptions = {
  from: "vamsitupakula474@gmail.com",
  to: "vamsitupakula75@gmail.com",
  subject: "Your Gmail got Hacked!!",
  text: "LOL! this is a testing email from nodemailer.....",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(`unknown error : ${error}`);
  } else {
    console.log("Email sent successfully : ", info);
  }
});
