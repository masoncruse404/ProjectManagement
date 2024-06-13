// - \src\app\_hooks\InfiniteScroll\Interface\ClientPropsInterface.ts - Client Props Interface

export interface ClientProps {
    clients: Array<{
      Client_Name: string
      project_ids: string
    }>
}