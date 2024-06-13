// - \src\app\_contexts\ProjectNameContextProviders\Interface\ProjectNameContextProvidersInterface - Project Name Context Providers Interface

// REACT
import { ReactNode } from "react"

export interface ProjectNameContextProps{
    value: string
    updateValue: (newValue: string) => void
}

export interface ProjectNameContextProviderProps {
  children: ReactNode
}