import { NextResponse } from "next/server";

export async function POST(req){ 
    require('dotenv').config();
   var body = await req.json();
  var mesg ="success";
  try {
    fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.SECRET_API_CAPTCHA}&response=${body.gRecaptchaToken}`,
    })
      .then((reCaptchaRes) => reCaptchaRes.json())
      .then((reCaptchaRes) => {
        console.log(
          reCaptchaRes,
          "Response from Google reCaptcha verification API"
        );
        if (reCaptchaRes?.score > 0.5) {
          let nodemailer = require('nodemailer')
          const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
              user: "Quatechbit@gmail.com",
              pass: process.env.SECRET_PASS_ADDRESS,
            },
            secure: true,
          })
          const mailDataforclient = {
            from: "Consultation <admin@Quatechbit.com>",
            to: body.email,
            subject: `Message From Quatechbit`,
          
            html: '<table cellpadding=\'0\'cellspacing=\'0\' border=\'0\' width=\'100%\' style=\'max-width:600px; margin:auto; background-color:#ffffff; border-collapse:collapse; \'><tr><td style=\'padding:20px;text-align:center;background-color:#f5f5f5;\'><h1 style=\'margin:0;\'>Thank you for contacting us</h1></td></tr><tr><td style=\'padding:20px;\'><p>Dear '+ body.name+',</p><p>Thank you for reaching out to us through our website.We appreciate your interest in our products/services.Our team has received your message and we will get back to you as soon as possible. In the meantime, please feel free to explore our website and learn more about what we offer. </p><p>Note -If you have any urgent inquiries, please do not hesitate to contact us directly at 7006041616 or admin@Quatechbit.com .Thank you again for your interest and we look forward to speaking with you soon.</p><p>Best regards,</p><p>'+"Admin & Team(CoderArt Studio.)"+'</p></td></tr></table><br> <p style="color:red;">This mail is auto generated please do not reply on it and we will communicate further with admin@Quatechbit.com *mail</p>'
          }
          const mailDataforteam = {
            from: "Admin <admin@Quatechbit.com>",
            to: "admin@Quatechbit.com",
            cc: "smartyjahid@gmail.com",
            subject: `Message From Quatechbit`,
          
            html: '<body><div style="background-color: #f2f2f2; padding:20px;"><h1 style="text-align: center; color: #007bff;">Client Contact</h1><p>Dear Manager,</p><p>I am writing to inform you that we have received a message from a potential client who is interested in our products and services. Please find their contact details and message below:</p><ul><li><strong>Name: </strong>'+body.name+'</li><li><strong>Email: </strong> '+body.email+'</li><li><strong>Mobile Number:</strong> '+body.mobile+'</li><li><strong>Message:</strong> '+body.message+'</li></ul><p>Please follow up with the client as soon as possible to provide them with more information about our products and services. Thank you for your attention to this matter.</p><p>Best regards,</p><p>Admin(Auto Generate designed By Jahid khan)</p></div></body>'
          }
          transporter.sendMail(mailDataforclient, function (err, info) {
     
            if(err)
              console.log(err)
            else
              console.log(info)
          });
         transporter.sendMail(mailDataforteam, function (err, info) {
            if(err)
              console.log(err)
            else
            console.log(info)
          });
          // Save data to the database from here
          console.log("Iam here")
     
         
        } else {
         console.log("problem")
        }
      });
 
      return NextResponse.json({
        status: "Success",
        message: "done",
      }); 
  
  } catch (err) {

    console.log("catah main:"+err)
    return NextResponse.json({
      status: "failure",
      message: "Error submitting the enquiry form",
    });  

   //  return NextResponse.json({ message: 'Internal server error' })
  }
}









// // Notice the function definition:
// export async function POST(req, res) { 
//   //  console.log('api called"+ body.toString());
//   require('dotenv').config()

//   let nodemailer = require('nodemailer')

//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//       user: process.env.email,
//       pass: process.env.password,
//     },
//     secure: true,
//   })
//   // const mailData = {
//   //   from: process.env.email,
//   //   to: process.env.email,
//   //   subject: `Message From ${body.name}`,
//   //   text: body.message + " | Sent from: " + body.email,
//   //   html: `<div>${body.message}</div><p>Sent from:
//   //   ${body.email}</p>`
//   // }
//   // transporter.sendMail(mailData, function (err, info) {
//   //   if(err)
//   //     console.log(err)
//   //   else
//   //     console.log(info)
//   // })
// return 
// }






// import dynamic from 'next/dynamic';
// import { NextResponse ,NextRequest} from 'next/server';

// export  async  function POST(request) {
// var name = await request.json();
//   // console.log(name);
//     require('dotenv').config()

//   let nodemailer = require('nodemailer')

//   // const transporter = nodemailer.createTransport({
//   //   port: 465,
//   //   host: "smtp.gmail.com",
//   //   auth: {
//   //     user: process.env.email,
//   //     pass: process.env.password,
//   //   },
//   //   secure: true,
//   // })
//   // const mailData = {
//   //   from: "admin@Quatechbit.com",
//   //   to: process.env.email,
//   //   subject: `Message From ${name.toString()}`,
//   //   // text: res.message + " | Sent from: " + email,
//   //   html: `<div>${message}</div><p>Sent from:
//   //   ${email}</p>`
//   // }
//   // transporter.sendMail(mailData, function (err, info) {
//   //   if(err)
//   //     console.log(err)
//   //   else
//   //     console.log(info)
//   // })
//   //return NextResponse.json({"status":await NextRequest.json()  });
// }
// // export default async function  POST(req, res) {
// //   if (method !== 'POST') {
// //     res.status(405).send({ message: 'Only POST requests allowed' })
// //     return
// //   }


// //   // not needed in NextJS v12+
// //   const body = JSON.parse(body)
// //  console.log(body)
// //   // the rest of your code
// //   return "success";
// // }