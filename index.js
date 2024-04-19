const express = require("express");
const shope = require("./Phone.json");
const cors = require("cors");
const app = express();
const port = 9999;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Mohi Uddin // shope data server");
});

app.get("/shope", (req, res) => {
  res.send(shope);
});

app.get("/shope/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("shope data for ID:", id);
  const shop = shope.find((shop) => shop.id === id) || {};
  res.send(shop);
});

app.listen(port, () => {
  console.log(`My first Node.js project running on port ${port}`);
});

//nodemon-g i
//nodemon

//npm install cors
