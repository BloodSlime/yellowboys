import React, { useState } from "react";
import MenuBtn from "./MenuBtn";

import LeaderboardImage from "../assets/images/menuIcons/leaderboards.png";
import ProfileImage from "../assets/images/menuIcons/profile.png";
import UpgradesImage from "../assets/images/menuIcons/upgrades.png";
import RouletteImage from "../assets/images/menuIcons/roulette.png";
import GamesImage from "../assets/images/menuIcons/games.png";

const MenuBar = ({ setWhichModal, whichModal }) => {
  const menuBtns = [
    {
      image: LeaderboardImage,
      text: "Leaders",
      key: "leaders",
    },
    {
      image: ProfileImage,
      text: "Profile",
      key: "profile",
    },
    {
      image: UpgradesImage,
      text: "Upgrades",
      key: "upgrades",
    },
    {
      image: RouletteImage,
      text: "Roulette",
      key: "roulette",
    },
    {
      image: GamesImage,
      text: "Games",
      key: "games",
    },
  ];

  return (
    <div className="menu">
      {menuBtns.map((item) => {
        return (
          <MenuBtn
            image={item.image}
            text={item.text}
            key={item.key}
            setWhichModal={setWhichModal}
            whichModal={whichModal}
          />
        );
      })}
    </div>
  );
};

export default MenuBar;
