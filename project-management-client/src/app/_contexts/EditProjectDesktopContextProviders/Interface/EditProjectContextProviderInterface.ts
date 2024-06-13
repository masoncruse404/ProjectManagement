// - \src\app\_contexts\EditProjectDesktopContextProviders\Interface\EditProjectContextProviderInterface - Edit Project Context Provider Interface
import { ReactNode } from "react";

export interface EditProjectContextProps {
    value: boolean
    updateValue: (newValue: boolean) => void
}
  
export interface EditProjectDesktopProps{
    children: ReactNode 
}