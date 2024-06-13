"use client"
// - \src\app\_contexts\SupplierContactsContextProviders - Supplier Contacts Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACES
import { SupplierContactsContextProps, SupplierContactsContextProviderProps } from "./Interface/SupplierContactsContextProvidersInterface";

const SupplierContactsContext = createContext<SupplierContactsContextProps | undefined>(undefined)
const SupplierContactsProviders: React.FC<SupplierContactsContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<string>("")
  const updateValue = (newValue: string) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <SupplierContactsContext.Provider value={{ value, updateValue }}>
      {children}
    </SupplierContactsContext.Provider>
  );
};

export const useSupplierContactsContext = () => {
  const context = useContext(SupplierContactsContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default SupplierContactsProviders; 

