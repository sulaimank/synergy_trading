import express, { application } from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import data from "../data.js";
import Application from "../models/Application.js";
import mailgun from "mailgun-js";
import { generateToken, isAdmin, isAuth } from "../utils.js";

const applicationRouter = express.Router();
const mg = mailgun({
  apiKey: "4daadb3b46bbbbdd59d1ef7ad06ffe4f-02fa25a3-6774f383",
  domain: "mg.danceplat.com",
});

applicationRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const application = new Application({
      userID: req.body.userID,
      fullName: req.body.fullName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      link: req.body.link,
      style: req.body.style,
    });
    const createdApplication = await application.save();
    const userID = createdApplication.userID;
    const fullName = createdApplication.fullName;
    const email = createdApplication.email;
    const firstName = createdApplication.firstName;
    const lastName = createdApplication.lastName;
    const link = createdApplication.link;
    const style = createdApplication.style;

    return mg.messages().send(
      {
        from: "noreply@danceplat.com",
        to: "dancemarketweb@gmail.com",
        subject: "Confirmation of Seller Application",
        html: `<h1>
        Congratulations your application has been submitted
           </h1>
           <p>
             <ul>
               <ul>First Name:${firstName}</ul>
                <ul>Last Name:${lastName}</ul>
                 <ul>Email:${email}</ul>
                <ul>Link to work:${link}</ul>
               <ul>Dance style:${style}</ul>
            ---------------------------------------------
             </ul>
           <p>Your application will be reviewed in  2-3 business days</p>
           </p>`,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: " this is not working" });
        } else {
          console.log(body);
          res.send({ message: "Your Application has been submitted" });
        }
      }
    );
  })
);
applicationRouter.get(
  "/applicationList",

  expressAsyncHandler(async (req, res) => {
    const applications = await Application.find({});
    res.send(applications);
  })
);

applicationRouter.delete(
  "/:id",

  expressAsyncHandler(async (req, res) => {
    const applications = await Application.findById(req.params.id);
    if (applications) {
      const deleteUser = await applications.remove();
      res.send({ message: "Application Deleted", applications: deleteUser });
    } else {
      res.status(404).send({ message: "Application Not Found" });
    }
  })
);
export default applicationRouter;
