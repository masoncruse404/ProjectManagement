// - \src\app\_contexts\ErpTypeContextProviders\Interface\ErpTypeContextProvidersInterface - Erp Type Context Providers Interface

// REACT
import { ReactNode } from "react";

export interface ErpTypeContextProps {
    value: string
    updateValue: (newValue: string) => void
}
  
export interface ErpTypeProviderProps {
    children: ReactNode
}