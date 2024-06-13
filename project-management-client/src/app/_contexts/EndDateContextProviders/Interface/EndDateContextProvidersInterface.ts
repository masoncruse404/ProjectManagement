// - \src\app\_contexts\EndDateContextProviders\Interface\EndDateContextProvidersInterface.ts - End Date Context Providers Interface

// REACT
import { ReactNode } from "react";

// DAYSJS
import dayjs from "dayjs";

export interface EndDateContextProps {
    value: dayjs.Dayjs
    updateValue: (newValue: dayjs.Dayjs) => void
}
  
export interface EndDateProviderProps {
    children: ReactNode 
}
  