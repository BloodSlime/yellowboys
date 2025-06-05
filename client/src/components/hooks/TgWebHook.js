import { useEffect } from "react";

function useTelegramWebApp() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const tg = window.Telegram.WebApp;
      tg.expand();
      tg.enableClosingConfirmation();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);
}

export default useTelegramWebApp;
