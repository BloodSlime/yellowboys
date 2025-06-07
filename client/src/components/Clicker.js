import React, { useState, useEffect, useContext } from "react";
import ClickerContext from "./context/provider";
import Balance from "./helpers/Balance";
import FloatingValue from "./helpers/FloatingValue";
import WebApp from "@twa-dev/sdk";
import { updateUserData } from "./api/api";

const Clicker = () => {
  const { balance, setBalance, clickReward } = useContext(ClickerContext);
  const [realValue, setRealValue] = useState(0);
  const [floatingValues, setFloatingValues] = useState([]);

  const handleClick = (e) => {
    setBalance((prev) => prev + clickReward);

    const floatingValue = {
      id: Date.now(),
      value: clickReward,
      x: Math.random() * 300,
      y: Math.random() * 300,
    };

    setFloatingValues((prev) => [...prev, floatingValue]);
    setTimeout(() => {
      setFloatingValues((prev) =>
        prev.filter((fv) => fv.id !== floatingValue.id)
      );
    }, 1000);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      //api запрос - update balance у пользователя
      const dataToSend = { balance };
      updateUserData(WebApp.initData, dataToSend);
      setRealValue((balance * 0.0001).toFixed(3));
    }, 500);

    return () => clearTimeout(timeout);
  }, [balance]);

  return (
    <div className="clicker">
      <h1 className="clicker__header">DROP AFTER DEX</h1>
      <div className="clicker__coin" onClick={(event) => handleClick(event)}>
        {floatingValues.map((item) => {
          return (
            <FloatingValue
              key={item.id}
              value={item.value}
              x={item.x}
              y={item.y}
            />
          );
        })}
      </div>
      <Balance balance={balance} realValue={realValue} />
    </div>
  );
};

export default Clicker;
