// - \src\app\_contexts\ProjectTypeContextProviders\Interface\ProjectTypeContextProvidersInterface.ts - Project Type Context Providers

// REACT
import { ReactNode } from "react";

export interface ProjectTypeContextProps {
    value: string
    updateValue: (newValue: string) => void
  }
  
export interface ProjectTypeContextProviderProps {
    children: ReactNode
}
  