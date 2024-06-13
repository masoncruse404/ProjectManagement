// - /src/app/_components/Sidebar/Desktop/ClientContainer/ClientList/ - Client List Container 

// react
import { useEffect, useState } from "react";

// MUI
import List from "@mui/material/List";

// CONTEXT
import { useSelectedIndexContext } from "@/app/_contexts/SelectedIndexProviders/SelectedIndexProviders";
import { useLastSelectedIndexContext } from "@/app/_contexts/LastSelectedContextProviders/LastSelectedContextProviders";
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";

// COMPONENTS
import ClientListItem from "./ClientListItem/ClientListItem";

// STYLES
import "@/styles/scrollbar.css";

// INTERFACES
import { ClientListProps } from "./Interface/ClientListInterface";

const ClientList: React.FC<ClientListProps> = ({ clients }) => {
  
 const selected_index_context = useSelectedIndexContext()
 const last_selected_index_context = useLastSelectedIndexContext()
 const selected_project_context = useSelectedProjectContext()

 const [clientList, setClientList] = useState<Array<{
    Client_Name: string
    project_ids: string
 }>>([])

  const handleListItemClick = (event: React.MouseEvent<any>, index: number) => {
    event.preventDefault()

    if(selected_index_context.value === index){
      selected_index_context.updateValue(-2)
      selected_project_context.updateValue(null)
    }
    
    if(selected_index_context.value !== index){  
      last_selected_index_context.updateValue(index)
      selected_index_context.updateValue(index)
    }
  };
  
  
  useEffect(() => { setClientList(clients); }, [clients])
  
  return (
    <List id="sidebar-client-list" className="scrollbar-primary" sx={{ padding: "0px", bgcolor: "background.paper",  overflowY: "auto", overflowX: "hidden", zIndex: "1"}} >
      {clientList.map && clientList.map((item, index) => {
        return (<ClientListItem key={index} item={item} selectedIndex={selected_index_context.value} handleListItemClick={handleListItemClick} index={index} />) 
      })}
    </List>
  );
};

export default ClientList