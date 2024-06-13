// - \src\app\_components\Mui\Badge\BadgeComponents - MUI Component (Project Note Count)

// REACT
import * as React from "react";

// MUI
import Badge from "@mui/material/Badge";
import { MessageRounded } from "@mui/icons-material";

// INTERFACES
import { BadgeComponentPropsInterface } from "./Interface/BadgeComponentPropsInterface";

const BadgeComponent: React.FC<BadgeComponentPropsInterface> = ({value}) => {
  
  return (
    <Badge badgeContent={value} 
      color="primary"
      sx={{marginRight:3}}
    >
    {/* Badge Component Start */}
      {/* MailIcon Component Start */}
      <MessageRounded fontSize="small" color="action" />
      {/* MailIcon Component End */}
    {/* Badge Component End */}
    </Badge>
  );
}


export default BadgeComponent