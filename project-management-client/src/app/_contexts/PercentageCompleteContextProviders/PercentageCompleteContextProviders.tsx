"use client"
// - \src\app\_contexts\PercentageCompleteContextProviders - Percentage Complete Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";
import { PercentageCompleteContextProps, PercentageCompleteProviderProps } from "./Interface/PercentageCompleteContextProvidersInterface";


const PercentageCompleteContext = createContext<PercentageCompleteContextProps | undefined>(undefined)
const PercentageCompleteContextProviders: React.FC<PercentageCompleteProviderProps> = ({ children }) => {

  const [value, setValue] = useState<number>(-1);
  const updateValue = (newValue: number) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <PercentageCompleteContext.Provider value={{ value, updateValue }}>
      {children}
    </PercentageCompleteContext.Provider>
  );
};

export const usePercentageCompleteContext = () => {
  const context = useContext(PercentageCompleteContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default PercentageCompleteContextProviders; 
