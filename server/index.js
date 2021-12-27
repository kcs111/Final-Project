const express = require("express");
const mongoose = require("mongoose");
const cors = require ("cors");
const bodyParser = require("body-parser");


import postRoutes from "./routes/post";

const app = express();

app.use("./routes/post.js", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://Kyla2021:Loveless54@cluster0.id7xo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(()=>{console.log("Server ready at http://localhost:${port}")});

