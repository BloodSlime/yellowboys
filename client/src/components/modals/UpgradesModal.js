import React from "react";
import UpgradeCard from "../helpers/UpgradeCard";

import ClickerIcon from "../../assets/images/upgrades/clicker.png";
import GangsterIcon from "../../assets/images/upgrades/gangster.png";
import NakurIcon from "../../assets/images/upgrades/nakur.png";
import TemshikIcon from "../../assets/images/upgrades/temshik.png";
import CapitalistIcon from "../../assets/images/upgrades/capitalist.png";

const UpgradesModal = () => {
  const upgrades = [
    {
      id: 1,
      name: "Clicker",
      description: "Increases reward per click",
      lvl: 1,
      value: `+1`,
      exp: 20,
      maxLvl: 10,
      cost: 50,
      image: ClickerIcon,
    },
    {
      id: 2,
      name: "Gangster",
      description: "Increases roulette rewards",
      lvl: 1,
      value: `x1.5`,
      exp: 20,
      maxLvl: 10,
      cost: 100,
      image: GangsterIcon,
    },
    {
      id: 3,
      name: "Nakur",
      description: "Reduces recharge time for roulette",
      lvl: 1,
      value: `24h`,
      exp: 60,
      maxLvl: 10,
      cost: 150,
      image: NakurIcon,
    },
    {
      id: 4,
      name: "Temshik",
      description: "Increases bonus from referrals",
      lvl: 1,
      value: `10%`,
      exp: 40,
      maxLvl: 10,
      cost: 150,
      image: TemshikIcon,
    },
    {
      id: 5,
      name: "Capitalist",
      description: "Passive income per hour",
      lvl: 1,
      value: 1000,
      exp: 80,
      maxLvl: 10,
      cost: 150,
      image: CapitalistIcon,
    },
  ];

  return (
    <div className="modal__content">
      <h2 className="modal-content__header">upgrades</h2>
      <div className="modal-content__upgrades">
        {upgrades.map((upgrade) => {
          return (
            <UpgradeCard key={`${upgrade.id}${upgrade.cost}`} info={upgrade} />
          );
        })}
      </div>
    </div>
  );
};

export default UpgradesModal;
