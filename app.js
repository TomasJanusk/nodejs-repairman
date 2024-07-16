const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const authRoutes = require("./routes/authRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const repairmanRoutes = require("./routes/repairmanRoutes");
const likeRoutes = require("./routes/likeRoutes");

const app = express();

const port = process.env.PORT;

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then((con) => console.log("Connected to database"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use(authRoutes);
app.use(serviceRoutes);
app.use(repairmanRoutes);
app.use(likeRoutes);

app.listen(port, () => console.log("Express started"));
