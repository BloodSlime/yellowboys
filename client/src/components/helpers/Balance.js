import React, { useState, useContext } from "react";
import ClickerContext from "../context/provider";

const Balance = ({ balance, realValue }) => {
  const { formatNumber } = useContext(ClickerContext);

  return (
    <div className="clicker__info">
      <h2 className="clicker-info__balance">{formatNumber(balance)}</h2>
      <div className="clicker-info__realvalue">~${realValue}</div>
    </div>
  );
};

export default Balance;
