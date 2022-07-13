const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

//this is to catch all path for client
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//make apis with /api prefix

app.listen(9000);
