import axios from "axios";

const serverUrl = process.env.SERVER_API_URL;

const getUserData = async (initData) => {
  const instance = axios.create({
    baseURL: "https://9118lm18-3000.euw.devtunnels.ms/api",
    timeout: 1000,
    headers: {
      "Telegram-WebApp-InitData": initData,
      "Content-Type": "application/json",
    },
  });

  try {
    const response = await instance.get(`/getUser`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export { getUserData };
