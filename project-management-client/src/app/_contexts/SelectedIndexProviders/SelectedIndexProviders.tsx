"use client"
// - \src\app\_contexts\SelectedIndexProviders - Selected Index Context Providers

// REACT
import React, { createContext, useContext, useState } from "react";

// INTERFACES
import { SelectedIndexContextProps, SelectedIndexContextProviderProps } from "./Interface/SelectedIndexProvidersInterface";

const SelectedIndexContext = createContext<SelectedIndexContextProps | undefined>(undefined)
const SelectedIndexContextProvider: React.FC<SelectedIndexContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<number>(-1);
  const updateValue = (newValue: number) => { setValue(newValue) }

  return (
    <SelectedIndexContext.Provider value={{ value, updateValue }}>
      {children}
    </SelectedIndexContext.Provider>
  );
};

export const useSelectedIndexContext = () => {
  const context = useContext(SelectedIndexContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider")
  }

  return context

};

export default SelectedIndexContextProvider
