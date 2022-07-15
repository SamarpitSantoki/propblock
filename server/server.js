const express = require("express");
const router = express.Router();
router.get("/market", (req, res) => {
  console.log("thiscomming");
  res.send({ data: "this is market data" });
});
router.get("/login", (req, res) => {
  console.log("comming");
  res.send({ data: "this is market data" });
});
router.post("/login", () => {
  console.log("hello");
});
router.post("/register", () => {
  console.log("hello");
});
module.exports = router;
