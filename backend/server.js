require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Item = require("./models/itemModel");
const User = require("./models/userModel");

connectDB();

const auth = require("./middleware/auth");

app.use(express.json());
app.use(express.urlencoded());

app.get("/api", (req, res) => {
  console.log("get request sent to '/api'");
  res.send("root for backend taskboard");
});

//Create/Register User
//
app.post("/api/users/register", (req, res) => {
  console.log("post request sent to /api/users/register");
  console.log(req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send({ message: "Please add all fields" });
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log(`Error with mongoose: ${err}`);
      res.status(400).send({ message: "Error with mongoose", err });
    }
    if (user) {
      // throw an error if the user already exists
      console.log("Error: User already exists");
      res.status(400).send({ message: "User already exists" });
    } else {
      bcrypt
        .hash(password, 10)
        .then((hashedPassword) => {
          const user = new User({
            name: name,
            email: email,
            password: hashedPassword,
          });
          user
            .save()
            .then((result) => {
              res.status(201).send({
                message: "User created successfully",
                email: result.email,
              });
            })
            .catch((error) => {
              res.status(500).send({
                message: "Error creating user",
                error,
              });
            });
        })
        .catch((e) => {
          res.status(500).send({
            message: "Password was not hashed successfully",
            e,
          });
        });
    }
  });
});

//Login User
//
app.post("/api/users/login", (req, res) => {
  console.log("post request sent to /api/users/login");
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({ message: "Please add all fields" });
  }
  User.findOne({ email: email })
    .then((user) => {
      bcrypt
        .compare(password, user.password)
        .then((passwordCheck) => {
          if (!passwordCheck) {
            res.status(400).send({
              message: "Incorrect Password",
              error,
            });
          }
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
          );
          res.status(200).send({
            message: "Login Successful",
            _id: user.id,
            name: user.name,
            email: user.email,
            token,
          });
        })
        .catch((error) => {
          res.status(400).send({
            message: "Incorrect Password",
            error,
          });
          console.log("incorrect password");
        });
    })
    .catch((e) => {
      res.status(404).send({
        message: "Email not found",
        e,
      });
      console.log("email not found");
    });
});

//GET items protected
//
app.get("/api/items", auth, (req, res) => {
  console.log("get request sent to /api/items");
  Item.find({ user: req.user.userId })
    .then((payload) => {
      res.status(200).json(payload);
    })
    .catch((e) => {
      res.status(500).send({
        message: "Server error",
        e,
      });
      console.log(
        "possible a server error, from GET request sent to /api/items"
      );
    });
});

//Create Item
//
app.post("/api/items", auth, (req, res) => {
  console.log("post request sent to /api/items");
  console.log(req.body);
  const item = new Item({
    title: req.body.title,
    details: req.body.details,
    list: req.body.list,
    user: req.user.userId,
  });
  item.save();
  res.status(200).json(item);
});

//Delete Item
//
app.delete("/api/items/:id", auth, (req, res) => {
  console.log("delete request sent to /api/items/:id");
  console.log(req.params.id);
  if (!req.user) {
    return res.status(401).json({ message: "user not found" });
  }
  Item.findById(req.params.id)
    .then((response) => {
      if (response.user.toString() !== req.user.userId) {
        return res.status(401).json({
          message: "user not authorized",
          response: response.user,
          request: req.user.userId,
        });
      }
      Item.deleteOne({ _id: response._id })
        .then((responseDelete) => {
          res
            .status(200)
            .json({ message: "item delete successful", responseDelete });
        })
        .catch((err) => {
          res.status(400).json({ message: "item delete unsuccessful", err });
        });
      console.log(response._id);
      // res.status(200).json({ response });
    })
    .catch((e) => {
      res.status(400).json({ message: "item not found", e });
    });
});

//test free access endpoint
// app.get("/api/items2", (req, res) => {
//   console.log("get request sent to api/items2");
//   res.send({ message: "this is the free access" });
// });

app.listen(port, () => {
  console.log(`taskboard listening on port ${port}`);
});
