// - \src\app\_contexts\SidebarContextProviders\Interface\SidebarContextProvidersInterface.ts - Sidebar Context Provider Interface 

// REACT
import { ReactNode } from "react";

export interface SidebarContextProps {
    value: boolean
    updateValue: (newValue: boolean) => void
}
  
export interface SidebarContextProviderProps {
    children: ReactNode
}