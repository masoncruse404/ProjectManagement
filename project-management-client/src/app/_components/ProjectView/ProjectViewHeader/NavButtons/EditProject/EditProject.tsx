// - \src\app\_components\ProjectView\ProjectViewHeader\NavButtons\EditProject\EditProject.tsx - Project View Header Edit Project Button

// MUI
import Button from "@mui/material/Button";

// CONTEXT
import { useEditProjectModalStatusContext } from "@/app/_contexts/EditProjectModalContextProviders/EditProjectModalStatusContextProviders";

export default function EditProjectButton() {
  const edit_project_modal_status_context = useEditProjectModalStatusContext()

  function handleEditProjectClick(){ edit_project_modal_status_context.updateValue(true) }

  return ( <Button variant="contained" sx={{fontSize: "12px"}} color="success" onClick={handleEditProjectClick}>Edit Project</Button> )
}