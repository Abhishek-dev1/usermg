const express = require("express");
const {
  createUser,
  getRandomUser,
  getUser,
  getUserAboveAge,
  listUserNames
} = require("../controllers/user-controller.js");

const router = express.Router();

router.get("/randomuser", getRandomUser);
router.get("/usernames", listUserNames);
router.get("/age/:age", getUserAboveAge);
router.get("/email/:email", getUser);
router.post("/createUser", createUser);

module.exports = router;
