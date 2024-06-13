"use client"
// - \src\app\_contexts\EditProjectModalContextProviders - Edit Project Modal Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACE
import { EditProjectModalStatusContextProps, EditProjectModalStatusContextProviderProps } from "./Interface/EditProjectModalContextProvidersInterface";

const EditProjectModalStatusContext = createContext<EditProjectModalStatusContextProps | undefined>(undefined)
const EditProjectModalStatusContextProviders: React.FC<EditProjectModalStatusContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<boolean>(false)
  const updateValue = (newValue: boolean) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <EditProjectModalStatusContext.Provider value={{ value, updateValue }}>
      {children}
    </EditProjectModalStatusContext.Provider>
  );
};

export const useEditProjectModalStatusContext = () => {
  const context = useContext(EditProjectModalStatusContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default EditProjectModalStatusContextProviders; 
