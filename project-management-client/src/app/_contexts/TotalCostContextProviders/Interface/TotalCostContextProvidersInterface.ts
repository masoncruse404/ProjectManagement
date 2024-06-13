// - //src/app/_contexts/TotalCostContextProviders/Interface/TotalCostContextProvidersInterface.ts - Total Cost Context Providers Interface
import { ReactNode } from "react";

export interface ContextProps {
    value: number
    updateValue: (newValue: number) => void
  }
  
export interface TotalCostProviderProps {
    children: ReactNode
}