
// - /src/components/sidebar/nested_note_list_item/nested_note_list_item.tsx - is a sidebar menu item that displays a project's note

// REACT 
import { useState } from "react";

// MUI
import Tooltip from "@mui/material/Tooltip";
import { ListItemButton } from "@mui/material";
import { Skeleton } from "@mui/material";


// STYLES
import "./NoteListItem.css";
import "../../../styles/containers.css";
import "../../../styles/utils.css";

// INTERFACE
import { NestedNoteListItemProps } from "./Interface/NoteListItemInterface";

const NoteListItem: React.FC<NestedNoteListItemProps> = ({ note }) => {

  const [loadingNotes, setLoadingNotes] = useState(false)
  const handleClick = (event: React.MouseEvent) => { event.preventDefault() }

  return (
    <>
      {loadingNotes ? <Skeleton sx={{ width: "100%" }} />
       : <Tooltip 
          placement="right"
          title="Edit Note"
          sx={{ padding: "0 0" }}
          >
          {/* Nested Note List Item Tooltip Container Start */}
          <ListItemButton onClick={(event) => handleClick(event)}>
            {/* Nested Note List Item Button Container Start */}
            <div className="note-container-desktop code-container">
              {/* Nested Note List Note Container Start */}
              {note.Notes}
              {/* Nested Note List Note Container End */}
            </div>
            {/* Nested Note List Item Button Container End */}
          </ListItemButton>
          {/* Nested Note List Item Tooltip Container End */}
        </Tooltip>
      }
    </>
  );
};

export default NoteListItem

 
 