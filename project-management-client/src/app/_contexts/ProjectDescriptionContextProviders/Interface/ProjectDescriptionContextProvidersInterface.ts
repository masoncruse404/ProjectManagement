// - \src\app\_contexts\ProjectDescriptionContextProviders\Interface\ProjectDescriptionContextProvidersInterface.ts - Project description context providers interface

// REACT
import { ReactNode } from "react"

export interface ProjectDescContextProps{
    value: string
    updateValue: (newValue: string) => void
}

export interface ProjectDescContextProviderProps {
  children: ReactNode
}