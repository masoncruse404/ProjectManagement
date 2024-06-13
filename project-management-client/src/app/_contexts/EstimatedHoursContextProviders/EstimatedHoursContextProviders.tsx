"use client"
// - \src\app\_contexts\EstimatedHoursContextProviders - Estimated Hours Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACES
import { EstimatedHoursContextProps, EstimatedHoursProviderProps } from "./Interface/EstimatedHoursContextProvidersInterface";

const EstimatedHoursContext = createContext<EstimatedHoursContextProps | undefined>(undefined)
const EstimatedHoursContextProviders: React.FC<EstimatedHoursProviderProps> = ({ children }) => {

  const [value, setValue] = useState<number>(0.0)
  const updateValue = (newValue: number) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <EstimatedHoursContext.Provider value={{ value, updateValue }}>
      {children}
    </EstimatedHoursContext.Provider>
  );
};

export const useEstimatedHoursContext = () => {
  const context = useContext(EstimatedHoursContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default EstimatedHoursContextProviders 
