// - \src\app\_contexts\SelectedIndexProviders\Interface\SelectedIndexProvidersInterface.ts - Selected Index Providers Interface 

// REACT
import { ReactNode } from "react"

export interface SelectedIndexContextProps {
    value: number
    updateValue: (newValue: number) => void
}
  
export interface SelectedIndexContextProviderProps {
    children: ReactNode
}