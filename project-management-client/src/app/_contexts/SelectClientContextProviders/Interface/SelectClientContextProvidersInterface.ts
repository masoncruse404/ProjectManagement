// - \src\app\_contexts\SelectClientContextProviders\Interface\SelectClientContextProvidersInterface - Select Client Context Providers Interface

// REACT
import { ReactNode } from "react"

export interface SelectClientContextProps {
    value: string
    updateValue: (newValue: string) => void
}
  
export interface SelectClientContextProviderProps {
    children: ReactNode
}
  