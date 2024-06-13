// - \src\app\_contexts\ContextProviders\Interface\ContextInterface.ts - Context Interface

// REACT
import { ReactNode } from "react";

export interface ContextProps {
    value: string
    updateValue: (newValue: string) => void
}
  
export interface ContextProviderProps {
    children: ReactNode
}