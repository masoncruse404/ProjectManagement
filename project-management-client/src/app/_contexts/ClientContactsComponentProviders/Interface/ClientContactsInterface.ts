// - \src\app\_contexts\ClientContactsComponentProviders\Interface\ClientContactsInterface.ts - Client Contacts Interface

// REACT
import { ReactNode } from "react";

export interface ClientContactsContextProps {
    value: string
    updateValue: (newValue: string) => void
}
  
export interface ClientContactsContextProviderProps {
    children: ReactNode
}