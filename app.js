const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes.js");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(public));
app.use("/api/", router);

const port = process.env.PORT || 3000;
let mongo = process.env.MONGO_URI;
mongoose
  .connect(`${mongo}`)
  .then(() => app.listen(port))
  .then(() => {
    console.log(`DB CONNECTED at ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
