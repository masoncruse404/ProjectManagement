"use client"
// - \src\app\_contexts\TotalCostContextProviders - Total Cost Context Providers

// REACT
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ContextProps {
  value: number
  updateValue: (newValue: number) => void
}

interface TotalCostProviderProps {
  children: ReactNode
}

const TotalCostContext = createContext<ContextProps | undefined>(undefined)
const TotalCostContextProvider: React.FC<TotalCostProviderProps> = ({ children }) => {

  const [value, setValue] = useState<number>(0.0)
  const updateValue = (newValue: number) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <TotalCostContext.Provider value={{ value, updateValue }}>
      {children}
    </TotalCostContext.Provider>
  );
};

export const useTotalCostContext = () => {
  const context = useContext(TotalCostContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context
};

export default TotalCostContextProvider
