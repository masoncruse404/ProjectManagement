"use client"
// - \src\app\_context\ActualHoursContextProviders - Actual Hours Context Provider

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACES
import { ActualTimeHoursContextProps, ActualTimeHoursContextProviderProps } from "./Interface/ActualTimeHoursInterface";

const ActualTimeHoursContext = createContext<ActualTimeHoursContextProps | undefined>(undefined)
const ActualTimeHoursContextProvider: React.FC<ActualTimeHoursContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<number>(0.0)
  const updateValue = (newValue: number) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <ActualTimeHoursContext.Provider value={{ value, updateValue }}>
      {children}
    </ActualTimeHoursContext.Provider>
  );
};

export const useActualTimeHoursContext = () => {
  const context = useContext(ActualTimeHoursContext)

  if (!context) {
    throw new Error("useSelectedProjectContext must be used within a SelectedProjectContextProvider");
  }

  return context;
};

export default ActualTimeHoursContextProvider
