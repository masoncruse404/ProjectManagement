// - \src\app\_context\CostPerHourComponent\Interface\CostPerHourInterface - Cost Per Hour Interface

//REACT
import { ReactNode } from "react";

export interface ContextProps {
    value: number
    updateValue: (newValue: number) => void
}
  
export interface CostPerHourProviderProps {
    children: ReactNode 
}