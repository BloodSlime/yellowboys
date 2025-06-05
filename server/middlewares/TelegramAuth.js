const { createHmac } = require("crypto");
require("dotenv").config();

function validateTelegramWebAppData(initData) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;

  try {
    const params = new URLSearchParams(initData);
    const hash = params.get("hash");
    const dataToCheck = [];

    params.sort();
    params.forEach((val, key) => {
      if (key !== "hash") {
        dataToCheck.push(`${key}=${val}`);
      }
    });

    const dataCheckString = dataToCheck.join("\n");
    const secretKey = createHmac("sha256", "WebAppData")
      .update(botToken)
      .digest();

    const computedHash = createHmac("sha256", secretKey)
      .update(dataCheckString)
      .digest("hex");

    return computedHash === hash;
  } catch (e) {
    return false;
  }
}

function parseInitData(initData) {
  const params = new URLSearchParams(initData);
  const data = {};

  params.forEach((value, key) => {
    data[key] = value;
  });

  return JSON.parse(data.user);
}

module.exports = (req, res, next) => {
  const initData =
    req.headers["telegram-webapp-initdata"] || req.query.initData;

  if (!initData) {
    return res.status(401).json({ error: "Telegram initData missing" });
  }

  if (!validateTelegramWebAppData(initData)) {
    return res.status(403).json({ error: "Invalid Telegram authentication" });
  }

  const userData = parseInitData(initData);
  req.telegramUser = userData;

  console.log(userData);

  next();
};
