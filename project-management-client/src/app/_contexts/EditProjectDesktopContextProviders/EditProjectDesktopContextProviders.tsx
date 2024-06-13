"use client"
// - \src\app\_contexts\EditProjectDesktopContextProviders - Edit Project Desktop Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACES
import { EditProjectContextProps, EditProjectDesktopProps } from "./Interface/EditProjectContextProviderInterface";

const EditProjectDesktopContext = createContext<EditProjectContextProps | undefined>(undefined);
const EditProjectDesktopContextProvider: React.FC<EditProjectDesktopProps> = ({ children }) => {

  const [value, setValue] = useState<boolean>(false);
  const updateValue = (newValue: boolean) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <EditProjectDesktopContext.Provider value={{ value, updateValue }}>
      {children}
    </EditProjectDesktopContext.Provider>
  );
};

export const useEditDesktopProjectContext = () => {
  const context = useContext(EditProjectDesktopContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default EditProjectDesktopContextProvider; 
