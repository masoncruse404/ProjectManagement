"use client"
// - \src\app\_contexts\EndDateContextProviders - End Date Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// DAYJS
import dayjs from "dayjs";

// CONTEXT
import { EndDateContextProps, EndDateProviderProps } from "./Interface/EndDateContextProvidersInterface";


const EndDateContext = createContext<EndDateContextProps | undefined>(undefined)
const EndDateContextProvider: React.FC<EndDateProviderProps> = ({ children }) => {

  const [value, setValue] = useState(dayjs())
  const updateValue = (newValue: dayjs.Dayjs) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <EndDateContext.Provider value={{ value, updateValue }}>
      {children}
    </EndDateContext.Provider>
  );
};

export const useEndDateContext = () => {
  const context = useContext(EndDateContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider")
  }

  return context
};

export default EndDateContextProvider
