// - \src\app\_components\ProjectView\ProjectView - Project View Container
"use client"

// REACT
import { useEffect, useState } from "react";

// CONTAINERS
import ProjectViewHeader from "./ProjectViewHeader/ProjectViewHeader";
import ProjectViewBody from "./ProjectViewBody/ProjectViewBody";

// CONTEXT
import { useSidebarContext } from "@/app/_contexts/SidebarContextProviders/SidebarContextProviders";

// MUI
import { Box } from "@mui/material";

const ProjectView: React.FC = () => {
    const [width, setWidth] = useState<number>(296)
    const sidebar_context = useSidebarContext()

    useEffect(() => {
    if(sidebar_context.value){ setWidth(296) }

    if(!sidebar_context.value){ setWidth(76) }
    }, [sidebar_context.value])
    
    return(
        <Box
        component="main"
        sx={{
          minWidth: `${width}px`,
          flexGrow: 1,
          bgcolor: "background.default",
          mt: ["3px", "2px", "1px"],
          ml:`${width}px`,
        }}
        >
        <ProjectViewHeader />
        <ProjectViewBody />
      </Box>
    )
}

export default ProjectView