// - \src\app\_contexts\SupplierContextProviders\Interface\SupplierContextProvidersInterface.ts - Supplier Context Providers Interface

// REACT
import { ReactNode } from "react";

export interface SupplierCompanyContextProps {
    value: number
    updateValue: (newValue: number) => void
}
  
export interface SupplierCompanyContextProviderProps {
    children: ReactNode
}