// - \src\app\_components\ProjectView\ProjectViewBody\ProjectViewUploadContainer\ProjectViewUploadContainer.tsx - Project View Upload Container

// REACT
import React from "react";

// MUI
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// COMPONENTS
import ProjectViewFileUpload from "./ProjectViewFileUpload/ProjectViewFileUpload";

// HOOKS
import ProjectViewFilesHook from "@/app/_hooks/ProjectViewFilesHook/ProjectViewFilesHook";

// STYLES
import "@/styles/utils.css";
import "@/styles/animations.css";

export default function ProjectViewFileUploadContainer() {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleClick = () => { setOpen(!open) }

  function handleOpenAnimation(){
    if ( open ) {
      document.getElementById("arrow_files")?.classList.add("arrow-closed");
    } else {
      document.getElementById("arrow_files")?.classList.remove("arrow-closed");
    }
  }

  React.useEffect(() => {
    handleOpenAnimation();
  }, [open])

  return (
    <Box>
      <Button
        onClick={handleClick}
        fullWidth
        sx={{display:"flex", 
             justifyContent:"center",
             marginBottom:"10px",
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
       File Upload
       </Typography>
       <ChevronLeftIcon id="arrow_files" className="arrow" sx={{color: "#000"}}/> 
       </Button> 
      {open ?
        <Box sx={{padding:"10px"}}>
          <ProjectViewFileUpload />
          <ProjectViewFilesHook /> 
        </Box>
      : null}
    </Box>
  );  
}


