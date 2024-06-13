// - \src\app\_contexts\LastSelectedContextProviders\Interface\LastSelectedContextProvidersInterface.ts - Last Selected COntext Providers Interface

import { ReactNode } from "react";

export interface LastSelectedIndexContextProps {
    value: number
    updateValue: (newValue: number) => void
}
  
export interface LastSelectedIndexContextProviderProps {
    children: ReactNode
}