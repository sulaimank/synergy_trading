import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import mailgun from "mailgun-js";
import data from "../data.js";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import crypto from "crypto";
import { generateToken, isAdmin, isAuth } from "../utils.js";
const userRouter = express.Router();

const DOMAIN = process.env.MAILGUN_DOMIAN;
const mg = mailgun({
  apiKey: "9512989591097e0e9c24837cfb180f4d-381f2624-8b7f6570",
  domain: "sandbox98fade1282c7487483b0706ba13fd00a.mailgun.org",
});

userRouter.get(
  "/top-sellers",
  expressAsyncHandler(async (req, res) => {
    const topSellers = await User.find({ isSeller: true })
      .sort({ "seller.rating": -1 })
      .limit(3);
    res.send(topSellers);
  })
);

// Returns the seller name only
userRouter.get(
  "/sellerContact",

  expressAsyncHandler(async (req, res) => {
    const sellers = await User.find({ isSeller: true });

    res.send(sellers);
  })
);

userRouter.get(
  "/buyerContact",

  expressAsyncHandler(async (req, res) => {
    const buyers = await User.find({ isSeller: false });

    res.send(buyers);
  })
);

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user.isVerified) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,

          isSeller: user.isSeller,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

userRouter.put(
  "/updateSeller",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.body.id);
    if (user) {
      user.seller.name = req.body.sellerName;
      user.seller.description = req.body.sellerDescription;

      const updatedUser = await user.save();
      res.send({ message: "User Updated", user: updatedUser });
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);

// Register User
userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      emailToken: crypto.randomUUID().toString("hex"),
      isVerified: false,
    });
    const createdUser = await user.save();
    const data = {
      from: "noreply@wealthfuel.com",
      to: req.body.email,
      subject: "Please Activate Your Account",
      html: ` <h2> Please click on the link to verify your account'</h2>
      <a href="http://localhost:5079/api/users/verify-email/${user.emailToken}">Verify your account </a>     
        `,
    };
    mg.messages().send(data, function (error, body) {
      console.log(body);
      if (error) {
        return res.json({
          error: error.message,
        });
      }
      res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        isSeller: user.isSeller,
        token: generateToken(createdUser),
      });
    });
  })
);

// Get the information from the URL

userRouter.get(
  "/verify-email/:token",
  expressAsyncHandler(async (req, res) => {
    const { token } = req.params;
    console.log(token);
    const user = await User.findOne({ emailToken: token });
    if (user) {
      user.emailToken = null;
      user.isVerified = true;
      user.save();
      res.send(`<!DOCTYPE html>
        <html>
          <head>
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              body {
                min-height: 100vh;
                background: #eee;
                display: flex;
                font-family: sans-serif;
              }
              .container {
                margin: auto;
                width: 500px;
                max-width: 90%;
              }
              .container form {
                width: 100%;
                height: 100%;
                padding: 20px;
                background: white;
                border-radius: 4px;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
              }
              .container form h1 {
                text-align: center;
                margin-bottom: 24px;
                color: #222;
              }
              .container form .form-control {
                width: 100%;
                height: 40px;
                background: white;
                border-radius: 4px;
                border: 1px solid silver;
                margin: 10px 0 18px 0;
                padding: 0 10px;
              }
              .container form .btn {
                margin-left: 50%;
                transform: translateX(-50%);
                width: 150px;
                height: 34px;
                color: white;
                border: none;
                outline: none;
                background-color: #2673c9;
                cursor: pointer;
                font-size: 16px;
                text-transform: uppercase;
                border-radius: 4px;
                transition: 0.3s;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <form action="" method="post">
                <h1>Congratulations, Your account has been activated</h1>
                <div class="form-group"></div>
        
                <a href="http://localhost:3000/login">
                  <input type="button" class="btn" value="Go to Website" />
                </a>
              </form>
            </div>
          </body>
        </html>`);
    } else {
      res.status(404).send({ message: "Cannot Find the user" });
    }
  })
);

userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);

// new forgot password
userRouter.put("/forgot", (req, res) => {
  const { email } = req.body;
});

userRouter.put(
  "/forgotPassword",
  expressAsyncHandler(async (req, res) => {
    // we need to get the payload of the
    const user = await User.findOne({ email: req.body.email });

    const token = jwt.sign({ _id: user._id }, process.env.RESET_PASSWORD_KEY, {
      expiresIn: "20m",
    });
    const data = {
      from: "noreply@danceplat.com",
      to: email,
      subject: "Forgot Password",
      html: ` <h2> Please click on given link to reset your password'</h2>
        <p>${process.env.CLIENT_URL}/resetpassword/${token} </p>
        `,
    };

    return user.updateOne({ resetLink: token }, function (err, sucess) {
      if (err) {
        return res.status(400).json({ error: "reset password link error" });
      } else {
        mg.messages().send(data, function (error, body) {
          if (error) {
            return res.json({
              error: err.message,
            });
          }
          return res.json({
            message: "Email has been sent, kindly follow the instructions",
          });
        });
      }
    });
  })
);

userRouter.put(
  "/profile",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (user.isSeller) {
        user.seller.name = req.body.sellerName || user.seller.name;
        user.seller.logo = req.body.sellerLogo || user.seller.logo;
        user.seller.description =
          req.body.sellerDescription || user.seller.description;
      }
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        isSeller: user.isSeller,
        token: generateToken(updatedUser),
      });
    }
  })
);

userRouter.get(
  "/",
  isAuth,

  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  })
);

userRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      if (user.email === "admin@example.com") {
        res.status(400).send({ message: "Can Not Delete Admin User" });
        return;
      }
      const deleteUser = await user.remove();
      res.send({ message: "User Deleted", user: deleteUser });
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);

userRouter.get(
  "/",
  isAuth,

  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  })
);

userRouter.put(
  "/emailSend",
  expressAsyncHandler(async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(200)
        .json({ msg: " This email is not registred in our system " });
    }
    const token = jwt.sign({ _id: user._id }, process.env.RESET_PASSWORD_KEY, {
      expiresIn: "20m",
    });

    const data = {
      from: "noreply@danceplat.com",
      to: email,
      subject: "Forgot Password",
      html: ` <h2> Please click on given link to reset your password'</h2>
        <p>${process.env.CLIENT_URL}/resetpassword/${token} </p>
        `,
    };

    //send email
  })
);

userRouter.put(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isSeller = Boolean(req.body.isSeller);
      user.isAdmin = Boolean(req.body.isAdmin);
      // user.isAdmin = req.body.isAdmin || user.isAdmin;
      const updatedUser = await user.save();
      res.send({ message: "User Updated", user: updatedUser });
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);

export default userRouter;
