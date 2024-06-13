// - \src\app\_contexts\NewProjectMobileContextProviders\Interface\NewProjectMobileContextProvidersInterface.ts - New Project Mobile Context Providers Interface

// REACT
import { ReactNode } from "react"

export interface NewProjectMobileContextProps {
    value: boolean
    updateValue: (newValue: boolean) => void
}
  
export interface NewProjectMobileProps{
    children: ReactNode
}
  