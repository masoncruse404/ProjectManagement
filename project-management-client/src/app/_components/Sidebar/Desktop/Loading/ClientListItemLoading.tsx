// - /src/app/_components/Sidebar/Desktop/Loading/ClientListItemLoading - Sidebar Client List Item Loading Component

// REACT
import React from "react";

// MUI
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Badge, Skeleton } from "@mui/material";

// CONTEXT
import { useSidebarContext } from "@/app/_contexts/SidebarContextProviders/SidebarContextProviders";

// STYLES
import "@/styles/utils.css"

const ClientListItemLoading: React.FC = () => {
  const sidebar_context = useSidebarContext()

  return (
    <>
      {/* Client List Item Wrap Start*/}
      {/* Client List Item Container Start */}

      <ListItem>
        {/* Client List Item Container Start */}
          <ListItemAvatar >
            {/* Client List Item Avatar Container Start */}
            <Badge color="info" badgeContent={<Skeleton sx={{width:"10px"}} />}>
              {/* Client List Item Badge Container Start */}
              {/* Client List Item Avatar Container Start */}
              <Avatar alt={"loading..."} />
              {/* Client List Item Avatar Container End */}
              {/* Client List Item Badge Container End */}
            </Badge>
            {/* Client List Item Avatar Container End */}
          </ListItemAvatar>

          <div className={!sidebar_context.value ? "d-none" : ""}>
            <Skeleton sx={{width:"210px"}}/>
          </div>
        {/* Client List Item Container End */}
      </ListItem>
    
      {/* Client List Item Wrap End*/}
    </>
  );
};

export default ClientListItemLoading