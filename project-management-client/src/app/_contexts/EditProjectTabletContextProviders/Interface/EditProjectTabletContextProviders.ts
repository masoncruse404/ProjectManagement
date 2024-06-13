// - \src\app\_contexts\EditProjectTabletContextProviders\Interface\EditProjectTabletContextProviders.ts - Edit Project Tablet Context Providers

// REACT
import { ReactNode } from "react";

export interface EditProjectTabletContextProps {
    value: boolean;
    updateValue: (newValue: boolean) => void
}
  
export interface EditProjectTabletProps{
    children: ReactNode 
}