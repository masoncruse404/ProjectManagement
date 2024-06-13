// - /src/app/_components/ProjectView/ProjectViewBody/ProjectViewNotesNestedList/ProjectViewNotesEdit.tsx - Project view notes edit component
"use client"


// react
import React, { useEffect, useRef, useState } from 'react'

// MUI
import { Box, Skeleton, TextField, Typography } from '@mui/material';

// components
import ProjectViewNoteEditMenu from './menu/ProjectViewNoteEditMenu';

// utils
import convertToHumanReadableFormat from "@/utils/convertDateHumanReadable"

// interfaces
import { NoteInterface } from '@/app/_contexts/SelectedNoteContext/Interface/SelectedNoteContextInterface';

export const ProjectViewNotesEdit = ({note} : {note:NoteInterface}) => {

  const [editedNote, setEditedNote] = useState<string | undefined>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [canEdit, setCanEdit] = useState<boolean>(false)
  const editNoteRef = useRef<HTMLTextAreaElement | null>(null)

  function handleAutoFocus(){
    if (editNoteRef.current) {
        editNoteRef.current.focus()
        // Moving cursor to the end
        editNoteRef.current.selectionStart = editNoteRef.current.value.length;
        editNoteRef.current.selectionEnd = editNoteRef.current.value.length;
    }
  }

  useEffect(() => { if(canEdit) handleAutoFocus() }, [canEdit])

  useEffect(() => {
    setEditedNote(note.Notes) 
  },[note.Notes])

  return (
  <Box>
  <Typography 
    variant="subtitle2"
    sx={{fontSize:"9px", 
         color:"#444", 
         width:"100%",  
         marginBottom:"1.5px"
        }}
  >
    {convertToHumanReadableFormat(note.Notes_DateCreated)}
  </Typography>
  <TextField
    id={`note-input-${note.Project_Notes_ID}`}
    name={`note-input-${note.Project_Notes_ID}`}
    multiline
    placeholder={note.Notes}
    disabled={!canEdit}
    inputRef={editNoteRef}
    maxRows={4} 
    sx={{ minWidth:"200px", 
          fontSize: "10px", 
          marginBottom:"10px", 
          background:"rgba(0, 0, 0,.05)",  
          "& .MuiInputBase-input.Mui-disabled": {
      WebkitTextFillColor: "#000000",
    }, }}
    value={loading ? "loading..." : editedNote}
    InputProps={{ endAdornment: <ProjectViewNoteEditMenu setLoading={setLoading} editedNote={editedNote} note={note} setCanEdit={setCanEdit} canEdit={canEdit}/> }}
    fullWidth={true}
    onChange={(event) => { setEditedNote(event.target.value) }}
  />
  </Box>
  )
}
