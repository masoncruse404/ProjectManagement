"use client"
// - \src\app\_contexts\ErpTypeContextProviders - Erp Type Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";
import { ErpTypeContextProps, ErpTypeProviderProps } from "./Interface/ErpTypeContextProvidersInterface"

const ErpTypeContext = createContext<ErpTypeContextProps | undefined>(undefined)
const ErpTypeContextProvider: React.FC<ErpTypeProviderProps> = ({ children }) => {

  const [value, setValue] = useState<string>("-1")
  const updateValue = (newValue: string) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <ErpTypeContext.Provider value={{ value, updateValue }}>
      {children}
    </ErpTypeContext.Provider>
  );
};

export const useErpTypeContext = () => {
  const context = useContext(ErpTypeContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default ErpTypeContextProvider
