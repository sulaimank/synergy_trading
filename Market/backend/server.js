import * as http from "http";
import { Server } from "socket.io";
import expressAsyncHandler from "express-async-handler";
import express, { response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import applicationRouter from "./routers/applicationRouter.js";
import orderRouter from "./routers/orderRouter.js";
import uploadRouter from "./routers/uploadRouter.js";
import conversationRouter from "./routers/conversations.js";
import messageRouter from "./routers/messages.js";
import User from "./models/userModel.js";
import bcrypt from "bcryptjs";
import mailgun from "mailgun-js";

import jwt from "jsonwebtoken";

dotenv.config();

const mg = mailgun({
  apiKey: "9512989591097e0e9c24837cfb180f4d-381f2624-8b7f6570",
  domain: "sandbox98fade1282c7487483b0706ba13fd00a.mailgun.org",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/amazona");
app.use("/api/uploads", uploadRouter);
app.use("/api/conversations", conversationRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);
app.use("/api/application", applicationRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
// this is for forhot passworD

app.post("/api/forgot-password", async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  // make sure the user exists
  if (!user) {
    res.send({ message: "This email does not exist in our records" });
    return;
  }
  //user exits and send back a one time link
  const token = jwt.sign({ _id: user.id }, process.env.RESET_PASSWORD_KEY, {
    expiresIn: "20m",
  });
  // now we need to get the link from this token
  const link = `http://localhost:5079/reset-password/${user.id}/${token}`;
  console.log(link);

  const data = {
    from: "noreply@wealthfuel.com",
    to: user.email,
    subject: "Forgot Password",
    html: ` <h2> Please click on given link to reset your password'</h2>
      <p>${link} </p>
      `,
  };
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
});

app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const user = await User.findById(req.params.id);
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
          width: 120px;
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
          <h1>Reset Email for ${user.email}</h1>
          <div class="form-group">
            <label for="password">New Password</label>
            <input
              type="password"
              name="password"
              id="password"
              class="form-control"
            />
          </div>
  
          <input type="submit" class="btn" value="Reset" />
        </form>
      </div>
    </body>
  </html>
  
  `);
  console.log(user.email);
  console.log(user.password);
});

app.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const user = await User.findById(req.params.id);
  console.log(user.name);
  if (req.body.password) {
    user.password = bcrypt.hashSync(req.body.password, 8);
  }

  const updatedUser = await user.save();

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
          <h1>Password has been Reset</h1>
          <div class="form-group"></div>
  
          <a href="/http://localhost:3000/signin">
            <input type="button" class="btn" value="Go to Website" />
          </a>
        </form>
      </div>
    </body>
  </html>
  `);

  console.log(user.email);
  console.log(user.password);
});

const __dirname = path.resolve();

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5079;

const httpServer = http.Server(app);

// creating the socket server
const io = new Server(httpServer, { cors: { origin: "*" } });
// this is to get all the users
global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  });
});
httpServer.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
