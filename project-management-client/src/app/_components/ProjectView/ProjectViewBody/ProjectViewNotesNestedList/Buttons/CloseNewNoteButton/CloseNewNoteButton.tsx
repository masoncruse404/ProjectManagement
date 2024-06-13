  // - \src\app\_components\ProjectView\ProjectViewBody\ProjectViewNotesNestedList\NewNoteButton\NewNoteButton - Project View New Note Button Component

  // REACT
  import * as React from "react";

  // MUI 
  import { Button, Box } from "@mui/material";

  // CONTEXT
  import { useNewNoteContext } from "@/app/_contexts/NewNoteContext/NewNoteContext";

  export default function CloseNewNoteButton() {
    const new_note_context = useNewNoteContext()
    const handleClick = () => { new_note_context.updateValue(!new_note_context.value) }

    return (
      <Box p={1} 
           border="1px dashed #ccc"
           borderRadius="5px"
           marginBottom="15px"
           textAlign="left"
      >
        <Button variant="outlined"
                component="span"
                color="error"
                fullWidth 
                onClick={handleClick}>
          Close Note
        </Button>
      </Box>
    );
  }