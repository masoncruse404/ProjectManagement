"use client"
// - \src\app\_contexts\EditProjectTabletContextProviders - Edit Project Tablet Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// CONTEXT
import { EditProjectTabletContextProps, EditProjectTabletProps } from "./Interface/EditProjectTabletContextProviders";

const EditProjectTabletContext = createContext<EditProjectTabletContextProps | undefined>(undefined)
const EditProjectTabletContextProvider: React.FC<EditProjectTabletProps> = ({ children }) => {

  const [value, setValue] = useState<boolean>(false)
  const updateValue = (newValue: boolean) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <EditProjectTabletContext.Provider value={{ value, updateValue }}>
      {children}
    </EditProjectTabletContext.Provider>
  );
};

export const useEditProjectTabletContext = () => {
  const context = useContext(EditProjectTabletContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default EditProjectTabletContextProvider 
