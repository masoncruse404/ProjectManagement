"use client"
// - \src\app\_contexts\NewProjectStatusContextProviders - New Project Status Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACE
import { NewProjectStatusContextProps, NewProjectStatusContextProviderProps } from "./Interface/NewProjectStatusContextProvidersInterface";

const NewProjectStatusContext = createContext<NewProjectStatusContextProps | undefined>(undefined)
const NewProjectStatusContextProvider: React.FC<NewProjectStatusContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<boolean>(false)
  const updateValue = (newValue: boolean) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <NewProjectStatusContext.Provider value={{ value, updateValue }}>
      {children}
    </NewProjectStatusContext.Provider>
  );
};

export const useNewProjectStatusContext = () => {
  const context = useContext(NewProjectStatusContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default NewProjectStatusContextProvider; 
