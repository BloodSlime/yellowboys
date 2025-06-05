import axios from "axios";

const getUserData = async (initData) => {
  const instance = axios.create({
    baseURL: "https://yellowboys.onrender.com/api",
    timeout: 10000,
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
