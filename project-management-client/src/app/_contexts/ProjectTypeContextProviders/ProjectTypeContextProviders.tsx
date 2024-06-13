"use client"
// - \src\app\_contexts\ProjectTypeContextProviders - Project Type Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";
import { ProjectTypeContextProps, ProjectTypeContextProviderProps } from "./Interface/ProjectTypeContextProvidersInterface";

const ProjectTypeContext = createContext<ProjectTypeContextProps| undefined>(undefined)
const ProjectTypeContextProviders: React.FC<ProjectTypeContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<string>("")
  const updateValue = (newValue: string) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <ProjectTypeContext.Provider value={{ value, updateValue }}>
      {children}
    </ProjectTypeContext.Provider>
  );
};

export const useProjectTypeContext = () => {
  const context = useContext(ProjectTypeContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider")
  }

  return context
};

export default ProjectTypeContextProviders 
