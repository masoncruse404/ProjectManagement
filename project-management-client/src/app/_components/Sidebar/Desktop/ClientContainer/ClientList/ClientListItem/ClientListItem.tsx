// - /src/app/_components/Sidebar/Desktop/ClientContainer/ClientList/ClientListItem - Sidebar Client List Item Component

// REACT
import React, { useMemo } from "react";

// MUI
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Badge } from "@mui/material";

// COMPONENTS
import ProjectList from "./ProjectList/ProjectList";

// CONTEXT
import { useSidebarContext } from "@/app/_contexts/SidebarContextProviders/SidebarContextProviders";

// INTERFACES
import { ClientListItemProps } from "./Interface/ClientListItemInterface";

// STYLES
import "./client-list-item.css"
import "@/styles/utils.css"

const ClientListItem: React.FC<ClientListItemProps> = ({ item, selectedIndex, handleListItemClick, index }) => {
  const sidebar_context = useSidebarContext()

  const handleFindProjectCount = (project_ids: string) => {
    const count = project_ids.split(",")

    return count.length;
  };

  const project_count = useMemo(() => {
    return handleFindProjectCount(item.project_ids)
  }, [item.project_ids]);


  return (
    <>
      {/* Client List Item Wrap Start*/}
      {/* Client List Item Container Start */}

      <ListItem className="client-list-item-wrap pointer" key={index}  alignItems="flex-start" selected={selectedIndex === index} onClick={(event: React.MouseEvent<any>) => handleListItemClick(event, index) }>
        {/* Client List Item Container Start */}
          <ListItemAvatar >
            {/* Client List Item Avatar Container Start */}
            <Badge color="info" badgeContent={project_count}>
              {/* Client List Item Badge Container Start */}
              {/* Client List Item Avatar Container Start */}
              <Avatar alt={item.Client_Name} />
              {/* Client List Item Avatar Container End */}
              {/* Client List Item Badge Container End */}
            </Badge>
            {/* Client List Item Avatar Container End */}
          </ListItemAvatar>

        <div className={!sidebar_context.value ? "d-none" : "client-list-item-text"}>
          <ListItemText
            primary={item.Client_Name}
            secondary={
              <React.Fragment>
                <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary" />
              </React.Fragment>
            }
          />
        </div>
        {/* Client List Item Container End */}
      </ListItem>
      {selectedIndex === index ? <ProjectList item={item} /> : null}
      <Divider/>
      {/* Client List Item Wrap End*/}
    </>
  );
};

export default ClientListItem