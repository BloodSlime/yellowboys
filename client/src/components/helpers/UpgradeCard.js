import React, { useEffect, useContext, useState, useMemo } from "react";
import ClickerContext from "../context/provider";
import { updateUserData } from "../api/api";
import WebApp from "@twa-dev/sdk";

const UpgradeCard = ({ info, setUpgrades }) => {
  const { formatNumber, upgrades } = useContext(ClickerContext);
  const formattedPrice = formatNumber(info.cost);
  const formattedValue = formatNumber(info.value);
  const [isMaxLevel, setIsMaxLevel] = useState(false);
  const imgSrc = useMemo(() => info.image, [info.image]);

  useEffect(() => {
    if (info.lvl === 10) {
      setIsMaxLevel(true);
    }
  }, []);

  const handleUpgrade = () => {
    let currentExp = upgrades[`${info.db_name}Exp`],
      currentLvl = upgrades[`${info.db_name}Level`],
      currentCost = upgrades[`${info.db_name}Cost`];

    if (currentExp === 100) {
      console.log("skjdfnskdfm");
      if (currentLvl === 10) {
        setIsMaxLevel(true);
        return 0;
      } else {
        currentLvl += 1;
        currentExp = 0;
        console.log(currentLvl);
      }
    }
    currentExp += 20;

    currentCost = Math.ceil(currentCost * info.priceMultiplier);

    const dataToSend = {
      [`${info.db_name}Exp`]: currentExp,
      [`${info.db_name}Level`]: currentLvl,
      [`${info.db_name}Cost`]: currentCost,
    };

    setUpgrades((prev) => {
      return {
        ...prev,
        ...dataToSend,
      };
    });
    updateUserData(WebApp.initData, dataToSend);
  };

  return (
    <div className="upgrade-card">
      <div className="upgrade-card__icon">
        <img src={imgSrc} />
      </div>
      <div className="upgrade-card__content">
        <h3 className="upgrade-card__header">
          {info.name}&nbsp;
          <span>{formattedValue}</span>
        </h3>
        <p className="upgrade-card__subheader">{info.description}</p>
        <div className="upgrade-card__exp">
          <div
            className="upgrade-card__progress"
            style={{
              width: `${info.exp}%`,
              transition: "width 0.5s ease-in-out",
            }}
          ></div>
        </div>
        <button
          className="upgrade-card__button btn"
          disabled={isMaxLevel}
          onClick={() => handleUpgrade()}
        >
          {isMaxLevel ? "Max Level" : `Upgrade (${formattedPrice})`}
        </button>
      </div>
    </div>
  );
};

export default UpgradeCard;
