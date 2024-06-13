// - \src\app\_contexts\NewProjectStatusContextProviders\Interface\NewProjectStatusContextProvidersInterface.ts - New Project Status Context Providers Interface

// REACT
import { ReactNode } from "react";

export interface NewProjectStatusContextProps {
    value: boolean
    updateValue: (newValue: boolean) => void
}
  
export interface NewProjectStatusContextProviderProps{
    children: ReactNode
}