const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const telegramAuth = require("./middlewares/TelegramAuth.js");

// const corsOptions = {
//   origin: "http://localhost:3000/",
//   optionsSuccessStatus: 200,
// };

const app = express();
app.use(
  cors({
    origin: [
      "https://9118lm18-3001.euw.devtunnels.ms",
      "https://web.telegram.org",
    ],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Telegram-WebApp-InitData"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(bodyParser.json());

const router = require("./routes/router");

app.use("/api", telegramAuth, router);

module.exports = app;
