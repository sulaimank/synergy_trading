import express from "express";
import Messages from "../models/Message.js";
import User from "../models/userModel.js";
import mailgun from "mailgun-js";

const messageRouter = express.Router();

const mg = mailgun({
  apiKey: "4daadb3b46bbbbdd59d1ef7ad06ffe4f-02fa25a3-6774f383",
  domain: "mg.danceplat.com",
});

//add

messageRouter.post("/", async (req, res) => {
  const { from, to, message } = req.body;
  const data = await Messages.create({
    message: { text: message },
    users: [from, to],
    sender: from,
  });
  const fromUser = await User.findById(from);
  const toUser = await User.findById(to);

  return mg.messages().send(
    {
      from: "noreply@danceplat.com",
      to: toUser.email,
      subject: "New Message on Site",
      html: `<h1>
      Hello, you have a message from ${fromUser.name}
        </h1> 
        <p>${message}</p>`,
    },
    (error, body) => {
      if (error) {
        console.log(error);
        res.status(500).send({ message: " this is not working" });
      } else {
        console.log(body);
        res.send({ message: "email sent" });
      }
    }
  );
});

//get

messageRouter.post("/getmess", async (req, res) => {
  try {
    const { from, to } = req.body;
    const messages = await Messages.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });
    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    res.json(projectedMessages);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default messageRouter;
