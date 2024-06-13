// - /src/app/_components/Sidebar/Desktop/ProjectListItem/ProjectListItem.jsx - Project List Item Component

// REACT
import * as React from "react";

// AXIOS
import axiosInstance from "@/axiosConfig";

// MUI
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

// COMPONENTS
import BadgeComponent from "@/app/_components/Mui/Badge/BadgeComponent";

// MUI
import { ListItem, Skeleton } from "@mui/material";

// STYLES
import "@/styles/utils.css";
import "./project-list-item.css";

// CONTEXT
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useRenderContext } from "@/app/_contexts/RenderContextProviders/RenderContextProviders";
import { useSidebarContext } from "@/app/_contexts/SidebarContextProviders/SidebarContextProviders";

//INTERFACES
import { ProjectListProps, ProjectListItemProps } from "./Interface/ProjectListItemInterface";

export default function ProjectListItem({
  project_id,
  project_index,
  handleListItemClick,
  selectedItemIndex,
}: ProjectListItemProps) {

  const [open, setOpen] = React.useState<boolean>(false)
  const [noteCount, setNoteCount] = React.useState<number>(0)
  const [project, setProject] = React.useState<ProjectListProps>()
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string>('')
  const selected_project_context = useSelectedProjectContext()
  const sidebar_context = useSidebarContext()
  const render_context = useRenderContext()

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, project: ProjectListProps | undefined) => {
    e.preventDefault();

    if (typeof project === "undefined") return;
    setOpen((prevOpen) => !prevOpen)
    handleListItemClick(e, project_index, project)
   
    selected_project_context.updateValue(project)
  };

  function handleFetchNotes(project_id: string) {
    if (!project_id) return;
    axiosInstance.get("/v1/note/" + project_id + "/count/").then((response) => {
      if (response.status === 200) {
        setNoteCount(response.data.data)
      }
    }).catch((error) => {
      setError(error)
    });
  }
  
  function checkProjectStatus(){
    if(project?.Project_Status_ID === 6 || project?.Project_Status_ID === 4){    
        return "line-through"   
    }else{
        return ""   
    }
  }

  function handleFetchProject(project_id: string) {
  
    if (!project_id) return;

    axiosInstance.get("/v1/projects/" + project_id)
    .then((response) => {
      
        setProject(response.data.data)
        setLoading(false);
      }).catch((error) => {
        setLoading(false)
        setError(error);
      })
   
  }
  
  React.useMemo(() => handleFetchNotes(project_id), [project_id, render_context.value])
  React.useMemo(() => handleFetchProject(project_id), [project_id, render_context.value])
  
  if(loading) return (<ListItemButton><Skeleton sx={{width:"100%"}} /></ListItemButton>)
  return (
    <ListItem sx={{margin: "0 0", padding: "0 0"}}>
        <ListItemButton className="project-list-item-wrap"  onClick={(e) => handleClick(e, project)} selected={selectedItemIndex === project_index}>
          <ListItemIcon sx={{marginLeft:"10px"}}><BadgeComponent value={noteCount} /></ListItemIcon>
          {sidebar_context.value ? 
          <ListItemText
              sx={{
                typography: {
                  textDecoration: `${checkProjectStatus()}`,
                  letterSpacing: "2px",
                  fontSize:"9px",
                },
              }} primary={project?.Project_Name} />
          : null}              
        </ListItemButton> 
    </ListItem>
  );
}
