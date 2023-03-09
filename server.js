const express = require("express");
const app = express();
const port = process.env.port||3000
const { data } = require("./data");

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
//key as products
app.get("/", function (req, res) {
  res.render("pages/index", {
    products: data,
  });
});

app.listen(port);
console.log(`Server is listening on port ${port}`);