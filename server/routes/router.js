const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const { BotData } = require("../models/bot_data");

router.get("/getUser", async (req, res) => {
  try {
    const telegramId = req.telegramUser.id;
    const user = await User.findOne({ where: { telegramId: `${telegramId}` } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.log("Unable to get user: ", error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/updateUser", async (req, res) => {
  try {
    const telegramId = req.telegramUser.id;
    const data = req.body.data;

    const user = await User.findOne({ where: { telegramId: `${telegramId}` } });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found while /updateUser" });
    }

    await user.update({ ...data });
    res.json({ message: "User updated successfully" });
  } catch (error) {
    console.log("Unable to update user: ", error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/getLeaderboards", async (req, res) => {
  try {
    const sortedUsersByBalance = await User.findAll({
      order: [["balance", "DESC"]],
    });
    const topTenUsersByBalance = sortedUsersByBalance
      .slice(0, 10)
      .map((user) => ({
        username: user.username || "UnknownUser",
        value: user.balance,
      }));
    const userPlacementByBalance =
      sortedUsersByBalance.findIndex(
        (user) => user.telegramId === `${req.telegramUser.id}`
      ) + 1;

    const sortedUsersByReferrals = await User.findAll();
    const topTenUsersByReferrals = sortedUsersByReferrals
      .sort((a, b) => b.referrals.length - a.referrals.length)
      .slice(0, 10)
      .map((user) => ({
        username: user.username || "UnknownUser",
        value: user.referrals.length,
      }));
    const userPlacementByReferrals =
      sortedUsersByReferrals.findIndex(
        (user) => user.telegramId === `${req.telegramUser.id}`
      ) + 1;

    res.json({
      topTenUsersByBalance,
      topTenUsersByReferrals,
      userPlacementByBalance,
      userPlacementByReferrals,
    });
  } catch (error) {
    console.log("Unable to get leaderboard data: ", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
