"use client"
// - \src\app\_contexts\SidebarContextProviders - Sidebar Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACES
import { SidebarContextProps, SidebarContextProviderProps } from "./Interface/SidebarContextProvidersInterface";

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)
const SidebarContextProvider: React.FC<SidebarContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<boolean>(true)
  const updateValue = (newValue: boolean) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <SidebarContext.Provider value={{ value, updateValue }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default SidebarContextProvider;
