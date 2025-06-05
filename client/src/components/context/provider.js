import { createContext, useState, useEffect } from "react";
import { getUserData } from "../api/api.js";
import WebApp from "@twa-dev/sdk";

const ClickerContext = createContext();

function Provider({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [balance, setBalance] = useState(0);
  const [clickReward, setClickReward] = useState(1);

  const [upgrades, setUpgrades] = useState({});

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    WebApp.ready();
    const getData = async () => {
      const response = await getUserData(WebApp.initData);
      console.log(response);
      setBalance(response.balance);
      setUpgrades({
        clickBonusCost: response.clickBonusCost,
        clickBonusExp: response.clickBonusExp,
        clickBonusLevel: response.clickBonusLevel,
        cooldownCost: response.cooldownCost,
        cooldownExp: response.cooldownExp,
        cooldownLevel: response.cooldownLevel,
        passiveIncomeCost: response.passiveIncomeCost,
        passiveIncomeExp: response.passiveIncomeExp,
        passiveIncomeLevel: response.passiveIncomeLevel,
        referralCost: response.referralCost,
        referralExp: response.referralExp,
        referralLevel: response.referralLevel,
        rouletteMultiplierCost: response.rouletteMultiplierCost,
        rouletteMultiplierExp: response.rouletteMultiplierExp,
        rouletteMultiplierLevel: response.rouletteMultiplierLevel,
      });
      setClickReward(
        [1, 3, 7, 12, 20, 30, 45, 60, 80, 100][response.clickBonusLevel]
      );

      setIsLoaded(true);
    };
    getData();
  }, []);

  return (
    <ClickerContext.Provider
      value={{
        balance,
        setBalance,
        formatNumber,
        upgrades,
        setUpgrades,
        clickReward,
      }}
    >
      {isLoaded === true ? children : <div className="loading">Loading...</div>}
    </ClickerContext.Provider>
  );
}

export { Provider };
export default ClickerContext;
