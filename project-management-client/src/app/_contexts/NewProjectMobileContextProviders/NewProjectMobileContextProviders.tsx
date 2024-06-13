"use client"
// - \src\app\_contexts\NewProjectMobileContextProviders - New Project Mobile Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACE
import { NewProjectMobileContextProps, NewProjectMobileProps } from "./Interface/NewProjectMobileContextProvidersInterface";

const NewProjectMobileContext = createContext<NewProjectMobileContextProps | undefined>(undefined)
const NewProjectMobileContextProvider: React.FC<NewProjectMobileProps> = ({ children }) => {

  const [value, setValue] = useState<boolean>(false)
  const updateValue = (newValue: boolean) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <NewProjectMobileContext.Provider value={{ value, updateValue }}>
      {children}
    </NewProjectMobileContext.Provider>
  );
};

export const useNewProjectMobileContext = () => {
  const context = useContext(NewProjectMobileContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default NewProjectMobileContextProvider; 
