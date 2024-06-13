// - \src\app\_contexts\EstimatedHoursContextProviders\Interface\EstimatedHoursContextProvidersInterface.ts - Estimated Hours Context Providers Interface

// REACT
import { ReactNode } from "react";

export interface EstimatedHoursContextProps {
    value: number
    updateValue: (newValue: number) => void
}
  
export interface EstimatedHoursProviderProps {
    children: ReactNode 
}