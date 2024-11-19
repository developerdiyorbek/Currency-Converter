import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyProvider";

export const useContextValues = () => useContext(CurrencyContext);
