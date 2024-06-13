// - \src\app\_contexts\ActualHoursContextProviders\Interface\ActualTimeHoursInterface - Actual Time Hours Interface

import { ReactNode } from "react";

export interface ActualTimeHoursContextProps {
    value: number
    updateValue: (newValue: number) => void
  }
  
export interface ActualTimeHoursContextProviderProps {
    children: ReactNode
}