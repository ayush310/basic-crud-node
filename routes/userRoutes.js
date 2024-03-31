const express = require("express");
const router = express.Router();
const uuid = require("uuid");

var users = [
  {
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@example.com",
  },
  {
    first_name: "Alice",
    last_name: "Smith",
    email: "alicesmith@example.com",
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuid.v4() });
  res.send(`${user.first_name} added to the database`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`${id} has been removed from the database`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email } = req.body;
  const user = users.find((user) => user.id === id);
  console.log(user);
  if (first_name) user.first_name = first_name;
  if (last_name) user.last_name = last_name;
  if (email) user.email = email;

  res.send(`${id} has been updated`);
});

module.exports = router;
