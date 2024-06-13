// - \src\app\_components\ProjectView\ProjectViewBody\ProjectViewNotesNestedList\ProjectViewNotesList.tsx - Project View Body Notes List Container

// REACT
import React, { useState, useEffect } from "react";

// AXIOS
import axiosInstance from "@/axiosConfig";

// MUI
import { Box, Button, Typography } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// STYLES
import "./project_view_notes_nested_list.css";
import "@/styles/utils.css"
import "@/styles/animations.css";

// COMPONENTS 
import NewNoteButton from "./Buttons/NewNoteButton/NewNoteButton";
import CloseNewNoteButton from "./Buttons/CloseNewNoteButton/CloseNewNoteButton";

// CONTEXT
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useRenderContext } from "@/app/_contexts/RenderContextProviders/RenderContextProviders";

// INTERFACES
import { ProjectNote } from "./Interface/ProjectNoteInterface"; 
import { ProjectViewNotesAdd } from "./ProjectViewNotesAdd";
import { useNewNoteContext } from "@/app/_contexts/NewNoteContext/NewNoteContext";
import { ProjectViewNotesEdit } from "./ProjectViewNotesEdit";

const ProjectViewNotesList: React.FC = () => {
  const selected_project_context = useSelectedProjectContext()
  const new_note_context = useNewNoteContext()
  const render_context = useRenderContext()
  const [open, setOpen] = useState<boolean>(false)
  const [notes, setNotes] = useState<ProjectNote[]>([])

  const handleClick = () => { setOpen(!open) }

  useEffect(() => {
    if (!selected_project_context.value?.Project_ID) return;
  
    axiosInstance.get("/v1/note/" + selected_project_context.value?.Project_ID)
      .then(response => { 
        const items = response.data.data
        const reversedItems = items.reverse()
        setNotes(reversedItems)
      })
      .catch(error => { console.error("Error fetching notes:", error) })
  }, [selected_project_context.value?.Project_ID, render_context.value])

  function handleOpenAnimation(){
    if ( open ) {
      document.getElementById("arrow_notes")?.classList.add("arrow-closed");
    } else {
      document.getElementById("arrow_notes")?.classList.remove("arrow-closed");
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
             paddingTop:"10px",
             paddingBottom:"10px"
            }}
       >
       <Typography 
         variant="h5"
         gutterBottom 
         marginRight="auto" 
         sx={{fontSize:"15px", 
              color: "#333", 
              marginLeft: "7.5px",
              marginBottom:"0"
            }} 
        >
       Project Notes
      </Typography>
      <ChevronLeftIcon id="arrow_notes" className="arrow" sx={{color: "#000"}}/>
       </Button>
        {open && (
          <Box sx={{marginLeft:"0px", 
                    padding:"10px", 
                    marginTop:"0", 
                    marginBottom:"0"
                  }}
          >
          {new_note_context.value ? <CloseNewNoteButton /> : <NewNoteButton />}
            <Box sx={{padding:"10px"}}>
              <ProjectViewNotesAdd />
              {notes.map && notes.map((note) => {
                return (<ProjectViewNotesEdit note={note} key={note.Project_Notes_ID} />);
              })}
            </Box>
          </Box>
      )}
    </Box>  
  );
}

export default ProjectViewNotesList;
