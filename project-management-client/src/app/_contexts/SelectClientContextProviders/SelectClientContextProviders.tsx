"use client"
// - \src\app\_contexts\SelectClientContextProviders - Select Client Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACES
import { SelectClientContextProps, SelectClientContextProviderProps } from "./Interface/SelectClientContextProvidersInterface";

const SelectClientContext = createContext<SelectClientContextProps | undefined>(undefined)
const SelectClientContextProviders: React.FC<SelectClientContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<string>("")
  const updateValue = (newValue: string) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <SelectClientContext.Provider value={{ value, updateValue }}>
      {children}
    </SelectClientContext.Provider>
  );
};

export const useSelectClientContext = () => {
  const context = useContext(SelectClientContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider")
  }

  return context
};

export default SelectClientContextProviders
