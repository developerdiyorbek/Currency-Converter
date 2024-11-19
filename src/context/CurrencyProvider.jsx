import { useState, createContext } from "react";

const CurrencyContext = createContext(null);

function CurrencyProvider({ children }) {
  const [fromCurrency, setFromCurrency] = useState("🇺🇸 USD - United States");
  const [toCurrency, setToCurrency] = useState("🇩🇪 EUR - Germany");
  const [amount, setAmount] = useState("");

  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export { CurrencyContext, CurrencyProvider };
