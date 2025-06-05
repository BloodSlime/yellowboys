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

// ВАЖНО: preflight-запросы должны проходить БЕЗ авторизации
app.use("/api", (req, res, next) => {
  if (req.method === "OPTIONS") {
    res.sendStatus(204);
  } else {
    next();
  }
});

const router = require("./routes/router");
// Временно логируем все запросы к /api для диагностики
app.use("/api", (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});
// ОТКЛЮЧАЕМ авторизацию для разработки
app.use("/api", telegramAuth, router);
// app.use("/api", router);

module.exports = app;
