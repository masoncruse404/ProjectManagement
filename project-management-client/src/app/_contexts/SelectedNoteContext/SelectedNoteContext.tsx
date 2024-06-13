"use client"
// - \src\app\_contexts\SelectedNoteContext - Selected Note Context Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACES
import { NoteInterface, SelectedNoteContextProps, SelectedNoteContextProviderProps } from "./Interface/SelectedNoteContextInterface";


const SelectedNoteContext = createContext<SelectedNoteContextProps | undefined>(undefined)
const SelectedNoteContextProvider: React.FC<SelectedNoteContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<NoteInterface | null>(null)
  const updateValue = (newValue: NoteInterface | null) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <SelectedNoteContext.Provider value={{ value, updateValue }}>
      {children}
    </SelectedNoteContext.Provider>
  );
};

export const useSelectedNoteContext = () => {
  const context = useContext(SelectedNoteContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider")
  }

  return context
};

export default SelectedNoteContextProvider
