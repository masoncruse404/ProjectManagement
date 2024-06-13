// - \src\app\_contexts\ProjectStatusContextProviders\Interface\ProjectStatusContextProvidersInterface.ts - Project Status Context Providers Interface

// REACT
import { ReactNode } from "react"

export interface ProjectStatusContextProps {
    value: string
    updateValue: (newValue: string) => void
}
  
export interface ProjectStatusContextProviderProps {
    children: ReactNode
}