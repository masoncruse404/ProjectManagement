// - \src\app\_contexts\NewProjectModalStatusContextProviders\Interface\NewProjectModalStatusContextProvidersInterface.ts - New Project Modal Status Context Providers Interface.ts 

// REACT
import { ReactNode } from "react";

export interface NewProjectContextProps {
    value: boolean
    updateValue: (newValue: boolean) => void
}
  
export interface NewProjectModalStatusContextProviderProps {
    children: ReactNode
}