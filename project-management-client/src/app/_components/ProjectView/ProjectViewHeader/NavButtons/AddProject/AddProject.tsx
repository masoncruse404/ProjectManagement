// - \src\app\_components\ProjectView\ProjectViewHeader\NavButtons\AddProject\AddProject - Project View Header Add Project Button

// MUI
import Button from "@mui/material/Button";

// CONTEXT
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

export default function AddProjectButton() {
  const new_project_modal_state_context = useNewProjectModalStatusContext()

  function handleAddProjectClick(){ new_project_modal_state_context.updateValue(true) }

  return ( <Button variant="contained" sx={{fontSize:"12px"}} onClick={handleAddProjectClick}>New Project</Button> )
}