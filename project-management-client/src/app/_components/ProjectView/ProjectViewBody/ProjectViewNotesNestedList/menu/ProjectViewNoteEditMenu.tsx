// - \src\app\_components\ProjectView\ProjectViewBody\ProjectViewNotesNestedList\menu\ProjectViewNoteMenu.tsx - Project View Edit Note Menu component
// REACT
import * as React from "react";

// MUI
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SettingsIcon from "@mui/icons-material/Settings";

// CONTEXT
import { DeleteOutlined, SaveOutlined } from "@mui/icons-material";
import { useSelectedNoteContext } from "@/app/_contexts/SelectedNoteContext/SelectedNoteContext";
import { NoteInterface } from "@/app/_contexts/SelectedNoteContext/Interface/SelectedNoteContextInterface";
import { useRenderContext } from "@/app/_contexts/RenderContextProviders/RenderContextProviders";

// AXIOS
import axiosInstance from "@/axiosConfig";
import toast from "react-hot-toast";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function ProjectViewNoteEditMenu({setLoading, editedNote, note, setCanEdit, canEdit} : {setLoading: React.Dispatch<React.SetStateAction<boolean>>, editedNote: string | undefined, note: NoteInterface, canEdit: boolean, setCanEdit: React.Dispatch<React.SetStateAction<boolean>>}) {
  const selected_note_context = useSelectedNoteContext()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl);

 
  const render_context = useRenderContext()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => { setAnchorEl(null) }

  const handleNoteEdit = () => {
    selected_note_context.updateValue(note)
    setCanEdit(true)
    setAnchorEl(null)
  };

  function handleNoteSave() {
    if(!canEdit) return
    setLoading(true)
    const parsedNote = editedNote?.replace(/'/g, "''");
    const data = {
        "Notes": parsedNote,
        "Project_Notes_ID": selected_note_context.value?.Project_Notes_ID
    };

    axiosInstance.put("/v1/note/edit", data).then(response => {
        if (response.status === 200) {
            setAnchorEl(null)
            setCanEdit(false)
            setLoading(false)
            render_context.updateValue(!render_context.value) 
            toast.success("Edited note")
        } 
    });
}


  const handleNoteDelete = async () => {
    selected_note_context.updateValue(note)
    const response = await axiosInstance.delete(`v1/note/${note.Project_Notes_ID}/delete`)

    if ( response.status === 200) {
      render_context.updateValue(!render_context.value) 
      toast.success("Deleted note")
    }

    setAnchorEl(null)
  };

  return (
    <>
      <Button
        id="demo-customized-button-project-view-note"
        aria-controls={open ? "demo-customized-menu-project-view-note" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        sx={{marginLeft:"10px"}}
      >
         <SettingsIcon />
      </Button>
      <StyledMenu
        id="demo-customized-menu-project-view-note"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button-project-view-note",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleNoteSave} disableRipple>
        <SaveOutlined />
          Save
        </MenuItem>
        <MenuItem onClick={handleNoteEdit} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
       
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
        <MenuItem onClick={handleNoteDelete} disableRipple>
          <DeleteOutlined />
          Delete 
        </MenuItem>
      </StyledMenu>
    </>
  );
}
