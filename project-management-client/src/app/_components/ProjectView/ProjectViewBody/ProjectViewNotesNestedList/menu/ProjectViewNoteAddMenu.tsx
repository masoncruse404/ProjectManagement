// - \src\app\_components\ProjectView\ProjectViewBody\ProjectViewNotesNestedList\menu\ProjectViewNoteMenu.tsx - Project View Add Note Menu component

// REACT
import * as React from "react";

// MUI
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SettingsIcon from "@mui/icons-material/Settings";

// CONTEXT
import {  CloseOutlined, SaveOutlined } from "@mui/icons-material";
import { useRenderContext } from "@/app/_contexts/RenderContextProviders/RenderContextProviders";

// AXIOS
import axiosInstance from "@/axiosConfig";
import { useNewNoteContext } from "@/app/_contexts/NewNoteContext/NewNoteContext";
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
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

export default function ProjectViewNoteAddMenu({newNote}:{newNote:string | undefined}) {
  const selected_project_context = useSelectedProjectContext()
  const new_note_context = useNewNoteContext()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl);

  const render_context = useRenderContext()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  };

  const handleNoteClose = () => {
    new_note_context.updateValue(false)
    setAnchorEl(null)
  }

  function handleNoteSave() {
    const parsedNote = newNote?.replace(/'/g, "''");
    const data = {
      "Notes": parsedNote,
      "Project_ID": selected_project_context.value?.Project_ID,
    };

   axiosInstance.post("/v1/note/add", data).then(response => {
      if (response.status === 200) {
        render_context.updateValue(!render_context.value)
        new_note_context.updateValue(!new_note_context.value)
        toast.success("Created note")
      } 
    });
  }

  const handleClose = async () => { setAnchorEl(null) };

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
        <MenuItem onClick={handleNoteClose} disableRipple>
        <CloseOutlined />
          Close 
        </MenuItem>
        
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>
    </>
  );
}
