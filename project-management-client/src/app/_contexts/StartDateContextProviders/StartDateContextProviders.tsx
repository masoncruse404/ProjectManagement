"use client"
// - \src\app\_contexts\StartDateContextProviders - Start Date Context Providers

// REACT
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// DAYJS
import dayjs from "dayjs";

interface StartDateContextProps {
  value: dayjs.Dayjs
  updateValue: (newValue: dayjs.Dayjs) => void
}

interface StartDateContextProviderProps {
  children: ReactNode
}

const StartDateContext = createContext<StartDateContextProps | undefined>(undefined);
const StartDateContextProviders: React.FC<StartDateContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState(dayjs())
  const updateValue = (newValue: dayjs.Dayjs) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <StartDateContext.Provider value={{ value, updateValue }}>
      {children}
    </StartDateContext.Provider>
  );
};

export const useStartDateContext = () => {
  const context = useContext(StartDateContext)

  if (!context) {
    throw new Error("useStartDateContext must be used within a StartDateContextProvider")
  }

  return context;
};

export default StartDateContextProviders
