"use client"
// - \src\app\_contexts\NewProjectDesktopContextProviders - New Project Desktop Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACES
import { NewProjectContextProps, NewProjectProps } from "./Interface/NewProjectDesktopContextProvidersInterface";

const NewProjectContext = createContext<NewProjectContextProps| undefined>(undefined)
const NewProjectDesktopContextProvider: React.FC<NewProjectProps> = ({ children }) => {

  const [value, setValue] = useState<boolean>(false)
  const updateValue = (newValue: boolean) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <NewProjectContext.Provider value={{ value, updateValue }}>
      {children}
    </NewProjectContext.Provider>
  );
};

export const useNewProjectDesktopContext = () => {
  const context = useContext(NewProjectContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider")
  }

  return context
};

export default NewProjectDesktopContextProvider 
