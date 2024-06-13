// - \src\app\_contexts\PercentageCompleteContextProviders\Interface\PercentageCompleteContextProvidersInterfaces.ts - Percentage Complete Context Providers Interface

//REACT
import { ReactNode } from "react"

export interface PercentageCompleteContextProps {
    value: number
    updateValue: (newValue: number) => void
}
  
export interface PercentageCompleteProviderProps {
    children: ReactNode 
}
  