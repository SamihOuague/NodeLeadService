const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const leads = require("./leads/Router");
const app = express();

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use(express.json());
app.use(cors());
app.use(leads);

app.listen("3000");