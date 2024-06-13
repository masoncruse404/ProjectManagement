"use client"
// - \src\app\_contexts\ErpContactsContextProviders - Erp Contacts Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACES
import { ErpContactsContextProps, ErpContactsProviderProps } from "./Interface/ErpContactsContextProvidersInterface";

const ErpContactsContext = createContext<ErpContactsContextProps| undefined>(undefined)
const ErpContactsContextProvider: React.FC<ErpContactsProviderProps> = ({ children }) => {

  const [value, setValue] = useState<string>("")
  const updateValue = (newValue: string) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <ErpContactsContext.Provider value={{ value, updateValue }}>
      {children}
    </ErpContactsContext.Provider>
  );
};

export const useErpContactsContext = () => {
  const context = useContext(ErpContactsContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider")
  }

  return context
};

export default ErpContactsContextProvider
