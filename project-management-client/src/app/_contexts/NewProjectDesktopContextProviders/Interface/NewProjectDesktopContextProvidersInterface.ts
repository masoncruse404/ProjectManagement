// - \src\app\_context\NewProjectDesktopContextProviders\Interface\NewProjectDesktopContextProvidersInterface.ts - New Project Desktop Context Providers Interface

// REACT
import { ReactNode } from "react";

export interface NewProjectContextProps {
    value: boolean
    updateValue: (newValue: boolean) => void
}
  
export interface NewProjectProps{
    children: ReactNode
}
  