import React, { useContext, useState } from "react";
import ClickerContext from "../context/provider";

const UpgradeCard = ({ info }) => {
  const [infoState, setInfoState] = useState({ ...info });

  const { formatNumber } = useContext(ClickerContext);
  const formattedPrice = formatNumber(infoState.cost);
  const formattedValue = formatNumber(infoState.value);

  return (
    <div className="upgrade-card">
      <div className="upgrade-card__icon">
        <img src={infoState.image} />
      </div>
      <div className="upgrade-card__content">
        <h3 className="upgrade-card__header">
          {infoState.name}&nbsp;
          <span>{formattedValue}</span>
        </h3>
        <p className="upgrade-card__subheader">{infoState.description}</p>
        <div className="upgrade-card__exp"></div>
        <button className="upgrade-card__button btn">
          Upgrade ({formattedPrice})
        </button>
      </div>
    </div>
  );
};

export default UpgradeCard;
