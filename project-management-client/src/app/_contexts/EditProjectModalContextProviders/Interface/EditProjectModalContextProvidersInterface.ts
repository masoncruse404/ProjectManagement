// - \src\app\_contexts\EditPRojectModalContextProviders\Interface\EditProjectModalContextProvidersInterface - Edit Project Modal Context Providers Interface

//REACT
import { ReactNode } from "react";

export interface EditProjectModalStatusContextProps {
    value: boolean
    updateValue: (newValue: boolean) => void
}
  
export interface EditProjectModalStatusContextProviderProps {
    children: ReactNode 
}