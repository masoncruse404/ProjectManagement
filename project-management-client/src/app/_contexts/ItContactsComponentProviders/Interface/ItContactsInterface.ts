// - \src\app\_contexts\ItContactsComponentProviders\Interface\ItContactsInterface - It Contacts Interface

// REACT
import { ReactNode } from "react";

export interface ItContactsContextProps {
    value: string
    updateValue: (newValue: string) => void
}
  
export interface ItContactsContextProviderProps {
    children: ReactNode
}
  