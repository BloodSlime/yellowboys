import React, { useContext } from "react";
import UpgradeCard from "../helpers/UpgradeCard";
import ClickerContext from "../context/provider";

import ClickerIcon from "../../assets/images/upgrades/clicker.png";
import GangsterIcon from "../../assets/images/upgrades/gangster.png";
import NakurIcon from "../../assets/images/upgrades/nakur.png";
import TemshikIcon from "../../assets/images/upgrades/temshik.png";
import CapitalistIcon from "../../assets/images/upgrades/capitalist.png";

const UpgradesModal = () => {
  const { upgrades, setUpgrades } = useContext(ClickerContext);

  const upgradesArr = [
    {
      id: 1,
      name: "Clicker",
      db_name: "clickBonus",
      description: "Increases reward per click",
      lvl: upgrades.clickBonusLevel,
      value: `+${
        [1, 3, 7, 12, 20, 30, 45, 60, 80, 100][upgrades.clickBonusLevel - 1]
      }`,
      exp: upgrades.clickBonusExp,
      maxLvl: 10,
      cost: upgrades.clickBonusCost,
      image: ClickerIcon,
      priceMultiplier: 1.4,
    },
    {
      id: 2,
      name: "Gangster",
      db_name: "rouletteMultiplier",
      description: "Multiplies roulette rewards",
      lvl: upgrades.rouletteMultiplierLevel,
      value: `x${
        [1.0, 1.3, 1.6, 2.0, 2.4, 2.8, 3.2, 3.7, 4.3, 5.0][
          upgrades.rouletteMultiplierLevel - 1
        ]
      }`,
      exp: upgrades.rouletteMultiplierExp,
      maxLvl: 10,
      cost: upgrades.rouletteMultiplierCost,
      image: GangsterIcon,
      priceMultiplier: 1.5,
    },
    {
      id: 3,
      name: "Nakur",
      db_name: "cooldown",
      description: "Reduces recharge time for roulette",
      lvl: upgrades.cooldownLevel,
      value: `${
        [24, 18, 12, 8, 5, 3.5, 2.5, 1.5, 1, 0.25][upgrades.cooldownLevel - 1]
      }h`,
      exp: upgrades.cooldownExp,
      maxLvl: 10,
      cost: upgrades.cooldownCost,
      image: NakurIcon,
      priceMultiplier: 1.6,
    },
    {
      id: 4,
      name: "Temshik",
      db_name: "referral",
      description: "Increases bonus from referrals",
      lvl: upgrades.referralLevel,
      value: `${
        [5, 10, 15, 20, 25, 30, 35, 40, 45, 50][upgrades.referralLevel - 1]
      }%`,
      exp: upgrades.referralExp,
      maxLvl: 10,
      cost: upgrades.referralCost,
      image: TemshikIcon,
      priceMultiplier: 1.8,
    },
    {
      id: 5,
      name: "Capitalist",
      db_name: "passiveIncome",
      description: "Passive income per hour",
      lvl: upgrades.passiveIncomeLevel,
      value: [1000, 10000, 50000, 75000, 120000, 200000, 300000, 500000][
        upgrades.passiveIncomeLevel - 1
      ],
      exp: upgrades.passiveIncomeExp,
      maxLvl: 10,
      cost: upgrades.passiveIncomeCost,
      image: CapitalistIcon,
      priceMultiplier: 2,
    },
  ];

  return (
    <div className="modal__content">
      <h2 className="modal-content__header">upgrades</h2>
      <div className="modal-content__upgrades">
        {upgradesArr.map((upgrade) => {
          return (
            <UpgradeCard
              key={upgrade.id}
              info={upgrade}
              setUpgrades={setUpgrades}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UpgradesModal;
