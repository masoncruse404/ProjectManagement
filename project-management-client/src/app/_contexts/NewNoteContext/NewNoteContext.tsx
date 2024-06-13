"use client"
// - \src\app\_contexts\NewNoteContext - New Note Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";
import { NewNoteContextProps, NewNoteProps } from "./Interface/NewNoteContextInterface";

const NewNoteContext = createContext<NewNoteContextProps| undefined>(undefined)
const NewNoteContextProvider: React.FC<NewNoteProps> = ({ children }) => {

  const [value, setValue] = useState<boolean>(false);
  const updateValue = (newValue: boolean) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <NewNoteContext.Provider value={{ value, updateValue }}>
      {children}
    </NewNoteContext.Provider>
  );
};

export const useNewNoteContext = () => {
  const context = useContext(NewNoteContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export default NewNoteContextProvider;
