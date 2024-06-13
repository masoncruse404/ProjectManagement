"use client"
// - \src\app\_contexts\ProjectDescriptionContextProviders - Project Description Context Providers

// REACT
import React, { createContext, useContext, useState, useEffect } from "react";
import { ProjectDescContextProps, ProjectDescContextProviderProps } from "./Interface/ProjectDescriptionContextProvidersInterface";


const ProjectDescContext = createContext<ProjectDescContextProps | undefined>(undefined)
const ProjectDescContextProvider: React.FC<ProjectDescContextProviderProps> = ({ children }) => {

  const [value, setValue] = useState<string>("")
  const updateValue = (newValue: string) => { setValue(newValue) }
  useEffect(() => {}, [value])

  return (
    <ProjectDescContext.Provider value={{ value, updateValue }}>
      {children}
    </ProjectDescContext.Provider>
  );
};

export const useProjectDescriptionContext = () => {
  const context = useContext(ProjectDescContext);

  if (!context) {
    throw new Error("useSelectedProjectContext must be used within a SelectedProjectContextProvider");
  }

  return context;
};

export default ProjectDescContextProvider;

