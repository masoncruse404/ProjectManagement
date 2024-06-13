"use client"
// - \src\app\_contexts\SupplierContextProviders - Supplier Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";
import { SupplierCompanyContextProps, SupplierCompanyContextProviderProps } from "./Interface/SupplierContextProvidersInterface";

const SupplierCompanyContext = createContext<SupplierCompanyContextProps | undefined>(undefined)
const SupplierCompanyContextProviders: React.FC<SupplierCompanyContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<number>(-1)
  const updateValue = (newValue: number) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <SupplierCompanyContext.Provider value={{ value, updateValue }}>
      {children}
    </SupplierCompanyContext.Provider>
  );
};

export const useSupplierCompanyContext = () => {
  const context = useContext(SupplierCompanyContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default SupplierCompanyContextProviders 
