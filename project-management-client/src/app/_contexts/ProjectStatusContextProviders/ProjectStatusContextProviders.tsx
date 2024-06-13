"use client"
// - \src\app\_contexts\ProjectStatusContextProviders - Project Status Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";

// INTERFACES
import { ProjectStatusContextProps, ProjectStatusContextProviderProps } from "./Interface/ProjectStatusContextProvidersInterface";

const ProjectStatusContext = createContext<ProjectStatusContextProps| undefined>(undefined)
const ProjectStatusContextProviders: React.FC<ProjectStatusContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<string>("")
  const updateValue = (newValue: string) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <ProjectStatusContext.Provider value={{ value, updateValue }}>
      {children}
    </ProjectStatusContext.Provider>
  );
};

export const useProjectStatusContext = () => {
  const context = useContext(ProjectStatusContext)

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider")
  }

  return context
};

export default ProjectStatusContextProviders 
