// - \src\app\_components\ProjectView\ProjectViewBody\ProjectViewDescription\ProjectViewDescription.tsx - Project View Description Component

// REACT
import * as React from "react";

// MUI
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

// STYLES
import "./project_view_description.css";
import "@/styles/containers.css";
import "@/styles/utils.css";
import "@/styles/animations.css";

// CONTEXT 
import ProjectViewDescGrid from "./ProjectViewDescGrid/ProjectViewDescGrid";

const ProjectViewDescription: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const handleClick = () => { setOpen(!open) }

  function handleOpenAnimation(){
    if ( open ) {
      document.getElementById("arrow_desc")?.classList.add("arrow-closed");
    } else {
      document.getElementById("arrow_desc")?.classList.remove("arrow-closed");
    }
  }

  React.useEffect(() => {
    handleOpenAnimation();
  }, [open])

  return (
    <Box
       sx={{color : "#fff"}}
    >
      <Button
        onClick={handleClick}
        fullWidth
        sx={{display:"flex", 
             justifyContent:"center",
             paddingTop:"10px",
             paddingBottom:"10px"
            }}
       >
       <Typography 
          variant="h5"
          gutterBottom
          marginRight="auto"
          marginBottom="0" 
          sx={{fontSize:"15px", color: "#333", marginLeft: "7.5px"}} 
       >
       Project Details
       </Typography>
       <ChevronLeftIcon id="arrow_desc" className="arrow" sx={{color: "#000"}}/>
       </Button>
       {open ? <ProjectViewDescGrid /> : null }
    </Box>
  );
};

export default ProjectViewDescription