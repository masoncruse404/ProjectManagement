// - \src\app\_context\ErpContactsContextProviders\Interface\ErpContactsContextProvidersInterface - Erp Contacts Context Providers Interface

// REACT
import { ReactNode } from "react";

export interface ErpContactsContextProps {
    value: string
    updateValue: (newValue: string) => void
}
  
export interface ErpContactsProviderProps {
    children: ReactNode 
}