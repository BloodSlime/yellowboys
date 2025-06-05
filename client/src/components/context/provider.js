import { createContext, useState } from "react";

const ClickerContext = createContext();

function Provider({ children }) {
  const [balance, setBalance] = useState(0);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <ClickerContext.Provider value={{ balance, setBalance, formatNumber }}>
      {children}
    </ClickerContext.Provider>
  );
}

export { Provider };
export default ClickerContext;
