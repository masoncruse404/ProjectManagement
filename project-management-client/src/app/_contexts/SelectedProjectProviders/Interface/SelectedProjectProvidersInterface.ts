// - \src\app\_contexts\SelectedProjectProviders\Interface\SelectedProjectProvidersInterface.ts - Selected Project Providers Interface

// REACT
import { ReactNode } from "react";

export interface ProjectListProps {
    Project_ID: number
    Project_Name: string
    Project_Desc: string
    Project_Status_ID: number
    Project_Type_ID: number
    Actual_Time_Hours: number
    Client_Contacts: string
    ERP_Contacts: string
    Estimated_Time_Hours: number
    IT_Contact_ID: string
    Client_ID: number
    Percentage_Complete: number
    Start_Date: Date
    End_Date: Date
    ERP_Type_ID: number
    Supplier_ID: number
    Supplier_Contacts: string
    Total_Cost: number
    Cost_Per_Hour: number
} 
  
export interface SelectedProjectContextProps {
    value: ProjectListProps | null
    updateValue: (newValue: ProjectListProps | null) => void
}
  
export interface SelectedProjectContextProviderProps {
    children: ReactNode
}