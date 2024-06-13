// - \src\app\_components\Sidebar\Desktop\ClientContainer\ClientList\ClientListItem\Interface\ClientListItemInterface - Client List Item Interface

export interface ClientListItemProps {
  item: {
    Client_Name: string
    project_ids: string
  }

  selectedIndex: number
  handleListItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => void
  index: number
}
