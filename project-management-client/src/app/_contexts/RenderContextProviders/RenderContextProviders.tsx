"use client"
// - \src\app\_contexts\RenderContextProviders - Render Context Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACES
import { RenderContextProps, RenderContextProviderProps } from "./Interface/RenderContextProvidersInterface";

const RenderContext = createContext<RenderContextProps | undefined>(undefined)
const RenderContextProvider: React.FC<RenderContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<boolean>(false)
  const updateValue = (newValue: boolean) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <RenderContext.Provider value={{ value, updateValue }}>
      {children}
    </RenderContext.Provider>
  );
};

export const useRenderContext = () => {
  const context = useContext(RenderContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider")
  }

  return context
};

export default RenderContextProvider
