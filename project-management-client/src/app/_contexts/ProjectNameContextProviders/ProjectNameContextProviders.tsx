"use client"
// - \src\app\_contexts\ProjectNameContextProviders - Project Name Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";
import { ProjectNameContextProps, ProjectNameContextProviderProps } from "./Interface/ProjectNameContextProvidersInterface";

const ProjectNameContext = createContext<ProjectNameContextProps | undefined>(undefined)
const ProjectNameContextProvider: React.FC<ProjectNameContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<string>("")
  const updateValue = (newValue: string) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <ProjectNameContext.Provider value={{ value, updateValue }}>
      {children}
    </ProjectNameContext.Provider>
  );
};

export const useProjectNameContext = () => {
  const context = useContext(ProjectNameContext)

  if (!context) {
    throw new Error("useSelectedProjectContext must be used within a SelectedProjectContextProvider")
  }

  return context
};

export default ProjectNameContextProvider

