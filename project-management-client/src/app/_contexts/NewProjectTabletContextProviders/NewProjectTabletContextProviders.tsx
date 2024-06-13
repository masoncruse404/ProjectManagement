"use client"
// - \src\app\_contexts\NewProjectTabletContextProviders - New Project Tablet Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACE
import { NewProjectContextProps, NewProjectTabletProps } from "./Interface/NewProjectTabletContextProvidersInterface";

const NewProjectTabletContext = createContext<NewProjectContextProps | undefined>(undefined)
const NewProjectTabletContextProvider: React.FC<NewProjectTabletProps> = ({ children }) => {

  const [value, setValue] = useState<boolean>(false)
  const updateValue = (newValue: boolean) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <NewProjectTabletContext.Provider value={{ value, updateValue }}>
      {children}
    </NewProjectTabletContext.Provider>
  );
};

export const useNewProjectTabletContext = () => {
  const context = useContext(NewProjectTabletContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider")
  }

  return context;
};

export default NewProjectTabletContextProvider; 
