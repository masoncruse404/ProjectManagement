// - \src\app\_contexts\RenderContextProviders\Interface\RenderContextProvidersInterface.ts - Render Context Providers Interface

// REACT
import { ReactNode } from "react"

export interface RenderContextProps {
    value: boolean
    updateValue: (newValue: boolean) => void
}
  
export interface RenderContextProviderProps {
    children: ReactNode
}