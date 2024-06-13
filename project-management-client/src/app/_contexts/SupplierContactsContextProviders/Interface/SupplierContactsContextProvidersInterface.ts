// - \src\app\_contexts\SupplierContactsContextProviders\Interface\SupplierContactsContextProvidersInterface.ts - Supplier Contacts Context Providers Interface

// REACT
import { ReactNode } from "react";

export interface SupplierContactsContextProps {
    value: string
    updateValue: (newValue: string) => void
}
  
export interface SupplierContactsContextProviderProps {
    children: ReactNode
}