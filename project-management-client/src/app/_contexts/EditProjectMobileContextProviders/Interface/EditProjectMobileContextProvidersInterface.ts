// - \src\app\_contexts\EditProjectMobileContextProviders\Interface\EditProjectMobileContextProvidersInterface - Edit Project Mobile Context Providers Interface

// REACT
import { ReactNode } from "react";

export interface EditProjectMobileContextProps {
    value: boolean
    updateValue: (newValue: boolean) => void
}
  
export interface EditProjectMobileProps{
    children: ReactNode
}