// - \src\app\_contexts\StartDateContextProviders\Interface\StartDateContextProvidersInterface.ts - Start Date Context Providers Interface

// REACT
import { ReactNode } from "react"

//DAYJS
import dayjs from "dayjs"

export interface StartDateContextProps {
    value: dayjs.Dayjs
    updateValue: (newValue: dayjs.Dayjs) => void
}
  
export interface StartDateContextProviderProps {
    children: ReactNode
}