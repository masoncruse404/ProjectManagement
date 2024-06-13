// - \src\app\_components\Sidebar\Desktop\ClientContainer\ClientList\ClientListItem\ProjectList\ProjectListItem\Interface\ProjectListItemInterface.ts - Project List Item Interface


export interface ProjectItemProps {
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
  
  export interface ProjectListItemProps {
    project_id: string
    project_index: number
    handleListItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number, project: ProjectItemProps) => void
    selectedItemIndex: number
}
  
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