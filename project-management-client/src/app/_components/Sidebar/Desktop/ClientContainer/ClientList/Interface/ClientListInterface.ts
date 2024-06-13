// - \src\app\_components\Sidebar\Desktop\ClientContainer\ClientList\Interface\ClientListInterface - Client List Interface

export interface ClientListProps {
    clients: Array<{
      Client_Name: string
      project_ids: string
    }>
  
}
