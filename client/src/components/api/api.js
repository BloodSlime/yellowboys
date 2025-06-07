import axios from "axios";

const instance = axios.create({
  baseURL: "https://yellowboys.onrender.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const getUserData = async (initData) => {
  try {
    const response = await instance.get(`/getUser`, {
      headers: {
        "Telegram-WebApp-InitData": initData,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

const updateUserData = async (initData, data) => {
  try {
    const response = await instance.post(
      "/updateUser",
      { data },
      {
        headers: {
          "Telegram-WebApp-InitData": initData,
        },
      }
    );
  } catch (error) {
    console.log("unable to update user info: ", error);
  }
};

const getLeaderboards = async (initData) => {
  try {
    const response = await instance.get("/getLeaderboards", {
      headers: { "Telegram-WebApp-InitData": initData },
    });

    return response.data;
  } catch (error) {
    console.log("unable to get leaderboards: ", error);
  }
};

const getReferralsData = async (initData) => {
  try {
    const response = await instance.get("/calulate-ref-bouns", {
      headers: { "Telegram-WebApp-InitData": initData },
    });

    return response.data;
  } catch (error) {
    console.log("unable to reach endpoint /calculate-ref-bonus", error);
  }
};

export { getUserData, updateUserData, getLeaderboards, getReferralsData };
