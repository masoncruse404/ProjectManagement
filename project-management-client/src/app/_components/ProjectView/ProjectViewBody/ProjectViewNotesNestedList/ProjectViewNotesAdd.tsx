// - /src/app/_components/ProjectView/ProjectViewBody/ProjectViewNotesNestedList/ProjectViewNotesAdd.tsx
"use client"

// react
import React, { useEffect, useRef, useState } from 'react'

// mui
import { TextField } from '@mui/material';

// components
import ProjectViewNoteAddMenu from './menu/ProjectViewNoteAddMenu';

// context
import { useNewNoteContext } from '@/app/_contexts/NewNoteContext/NewNoteContext';

export const ProjectViewNotesAdd = () => {
  const new_note_context = useNewNoteContext()
  const [newNote, setNewNote] = useState<string | undefined>("")
  const newNoteRef = useRef<HTMLTextAreaElement | null>(null)

  function handleAutoFocus(){
    if (newNoteRef.current) {
        newNoteRef.current.focus()
    }
  }

  useEffect(() => { setNewNote(""); handleAutoFocus() }, [newNoteRef, new_note_context.value])

  if(!new_note_context.value) return;
  return (

  <TextField
    id="new-note-input"
    name="new-note-input"
    multiline
    placeholder='here is a new note...'
    inputRef={newNoteRef}
    maxRows={4}
    sx={{  minWidth: "200px", 
           fontSize: "10px",
           marginBottom:"10px",
           background:"rgba(0, 0, 0,.05)"
         }}
    value={newNote}
    InputProps={{ endAdornment: <ProjectViewNoteAddMenu newNote={newNote} />}}
    fullWidth={true}
    onChange={(event) => { setNewNote(event.target.value) }}
  />
 
  )
}
