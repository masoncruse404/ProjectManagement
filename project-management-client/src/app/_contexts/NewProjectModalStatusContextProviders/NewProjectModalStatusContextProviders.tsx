"use client"
// - \src\app\_contexts\NewProjectModalStatusContextProviders - New Project Modal Status Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACES
import { NewProjectContextProps, NewProjectModalStatusContextProviderProps } from "./Interface/NewProjectModalStatusContextProvidersInterface";

const NewProjectModalStatusContext = createContext<NewProjectContextProps | undefined>(undefined)
const NewProjectModalStatusContextProviders: React.FC<NewProjectModalStatusContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<boolean>(false)
  const updateValue = (newValue: boolean) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <NewProjectModalStatusContext.Provider value={{ value, updateValue }}>
      {children}
    </NewProjectModalStatusContext.Provider>
  );
};

export const useNewProjectModalStatusContext = () => {
  const context = useContext(NewProjectModalStatusContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default NewProjectModalStatusContextProviders 
