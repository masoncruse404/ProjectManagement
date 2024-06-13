// - \src\app\_context\NewProjectTabletContextProviders\Interface\NewProjectTabletContextProvidersInterface - New Project Tablet Context Providers Interface

// REACT
import { ReactNode } from "react"

export interface NewProjectContextProps {
    value: boolean
    updateValue: (newValue: boolean) => void
}
  
export interface NewProjectTabletProps{
    children: ReactNode
}
  