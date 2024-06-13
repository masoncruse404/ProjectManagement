"use client"
// - \src\app\_contexts\EditProjectMobileContextProviders - Edit Project Mobile Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACE
import { EditProjectMobileProps, EditProjectMobileContextProps } from "./Interface/EditProjectMobileContextProvidersInterface"; 

const EditProjectMobileContext = createContext<EditProjectMobileContextProps | undefined>(undefined)
const EditProjectMobileContextProvider: React.FC<EditProjectMobileProps> = ({ children }) => {

  const [value, setValue] = useState<boolean>(false)
  const updateValue = (newValue: boolean) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <EditProjectMobileContext.Provider value={{ value, updateValue }}>
      {children}
    </EditProjectMobileContext.Provider>
  );
};

export const useEditProjectMobileContext = () => {
  const context = useContext(EditProjectMobileContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider")
  }

  return context;
};

export default EditProjectMobileContextProvider; 
