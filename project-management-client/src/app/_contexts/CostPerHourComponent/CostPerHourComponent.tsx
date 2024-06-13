"use client"
// - \src\app\_contexts\CostPerHourComponent - Cost Per Hour Component

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACES
import { ContextProps, CostPerHourProviderProps } from "./Interface/CostPerHourInterface";

const CostPerHourContext = createContext<ContextProps| undefined>(undefined);
const CostPerHourContextProvider: React.FC<CostPerHourProviderProps> = ({ children }) => {

  const [value, setValue] = useState<number>(0.0)
  const updateValue = (newValue: number) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <CostPerHourContext.Provider value={{ value, updateValue }}>
      {children}
    </CostPerHourContext.Provider>
  );
};

export const useCostPerHourContext = () => {
  const context = useContext(CostPerHourContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default CostPerHourContextProvider;
