"use client"
// - \src\app\_context\ItContactsComponentProviders - It Contacts Component Context Provider

// REACT
import React, { createContext, useContext, useState, useEffect } from "react"

 // INTERFACES
import { ItContactsContextProps, ItContactsContextProviderProps } from "./Interface/ItContactsInterface";

const ItContactsContext = createContext<ItContactsContextProps  | undefined>(undefined)
const ItContactsContextProvider: React.FC<ItContactsContextProviderProps> = ({ children }) => {

const [value, setValue] = useState<string>("")
const updateValue = (newValue: string) => { setValue(newValue) }
useEffect(() => {}, [value])

  return (
    <ItContactsContext.Provider value={{ value, updateValue }}>
      {children}
    </ItContactsContext.Provider>
  );
};

export const useItContactsContext = () => {
  const context = useContext(ItContactsContext)

  if (!context) {
    throw new Error('useSelectedProjectContext must be used within a SelectedProjectContextProvider');
  }

  return context;
};

export default ItContactsContextProvider

