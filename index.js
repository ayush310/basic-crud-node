const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hii there!!");
});
// app.get("/", (req, res));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
