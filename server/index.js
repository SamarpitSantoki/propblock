const express = require("express");
const path = require("path");
const app = express();
const serverRoutes = require("./server");
//enable thisa for production
app.use(express.static(path.join(__dirname, "../client/build")));
console.log(path.join(__dirname, "../client/build"));
app.use("/api", serverRoutes);

//do not touch this
//this is to catch all path for client
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

//make apis with /api prefix

app.listen(9000);
