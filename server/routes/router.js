const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const { BotData } = require("../models/bot_data");

router.get("/getUser", async (req, res) => {
  console.log("Received request to get user data");
  try {
    const telegramId = req.telegramUser.id;
    console.log("Telegram ID:", telegramId);
    console.log("Telegram ID:", typeof telegramId);

    const user = await User.findOne({ where: { telegramId } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.log("Unable to get user: ", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
