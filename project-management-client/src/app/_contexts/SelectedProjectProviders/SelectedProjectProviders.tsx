"use client"
// - \src\app\_contexts\SelectedProjectProviders - Selected Project Providers Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";
import { ProjectListProps, SelectedProjectContextProps, SelectedProjectContextProviderProps } from "./Interface/SelectedProjectProvidersInterface";

const SelectedProjectContext = createContext<SelectedProjectContextProps | undefined>(undefined)
const SelectedProjectContextProvider: React.FC<SelectedProjectContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<ProjectListProps | null>(null)
  const updateValue = (newValue: ProjectListProps | null) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <SelectedProjectContext.Provider value={{ value, updateValue }}>
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectContext = () => {
  const context = useContext(SelectedProjectContext)

  if (!context) {
    throw new Error("useSelectedProjectContext must be used within a SelectedProjectContextProvider");
  }

  return context;
};

export default SelectedProjectContextProvider
