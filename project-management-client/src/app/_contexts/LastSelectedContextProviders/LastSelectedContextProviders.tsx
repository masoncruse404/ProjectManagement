"use client"
// - \src\app\_contexts\LastSelectedContextProviders - Last Selected Context Providers

// REACT
import React, { createContext, useContext, useState } from "react";

// INTERFACE
import { LastSelectedIndexContextProps, LastSelectedIndexContextProviderProps } from "./Interface/LastSelectedContextProvidersInterface";

const LastSelectedIndexContext = createContext<LastSelectedIndexContextProps | undefined>(undefined)
const LastSelectedIndexContextProvider: React.FC<LastSelectedIndexContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<number>(-3)
  const updateValue = (newValue: number) => { setValue(newValue) }

  return (
    <LastSelectedIndexContext.Provider value={{ value, updateValue }}>
      {children}
    </LastSelectedIndexContext.Provider>
  );
};

export const useLastSelectedIndexContext = () => {
  const context = useContext(LastSelectedIndexContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default LastSelectedIndexContextProvider
