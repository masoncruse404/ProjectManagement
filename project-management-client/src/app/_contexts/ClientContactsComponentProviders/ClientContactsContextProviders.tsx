"use client"
// - \src\app\_context\ClientContactsComponentProviders - Client Contacts Component Context Provider

import React, { createContext, useContext, useState, useEffect } from "react"

// INTERFACE
import { ClientContactsContextProps, ClientContactsContextProviderProps } from "./Interface/ClientContactsInterface";


const ClientContactsContext = createContext<ClientContactsContextProps | undefined>(undefined)
const ClientContactsContextProvider: React.FC<ClientContactsContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<string>("")
  const updateValue = (newValue: string) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <ClientContactsContext.Provider value={{ value, updateValue }}>
      {children}
    </ClientContactsContext.Provider>
  );
};

export const useClientContactsContext = () => {
  const context = useContext(ClientContactsContext)
  if (!context) {
    throw new Error("useSelectedProjectContext must be used within a SelectedProjectContextProvider");
  }

  return context;
};

export default ClientContactsContextProvider
