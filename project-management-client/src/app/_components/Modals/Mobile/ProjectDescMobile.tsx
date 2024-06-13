// - \src\app\_components\Modals\Mobile\ProjectDescMobile - Project Desc Mobile Component

// REACT
import * as React from "react";

// MUI 
import TextField from "@mui/material/TextField";

// CONTEXT
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useProjectDescriptionContext } from "@/app/_contexts/ProjectDescriptionContextProviders/ProjectDescriptionContextProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

const ProjectDescMobileComponent: React.FC = () => {
  const [projectDesc, setProjectDesc] = React.useState<string>("")

  const project_description_context = useProjectDescriptionContext()
  const project_app_context = useSelectedProjectContext()
  const new_project_modal_state_context = useNewProjectModalStatusContext() 

  React.useEffect(() => { project_description_context.updateValue(projectDesc) }, [projectDesc])

  React.useEffect(() => {
    if (!project_app_context.value) return;
    if (new_project_modal_state_context.value) return;

    setProjectDesc(project_app_context.value.Project_Desc);
    project_description_context.updateValue(project_app_context.value.Project_Desc)
  }, [project_app_context.value])

  return (
    <TextField
      id="project-desc-mobile-input"
      label="Project Description"
      multiline
      rows={3}
      sx={{ width: "200px", fontSize: "10px" }}
      value={projectDesc}
      onChange={(event) => { setProjectDesc(event.target.value) }}
    />
  );
};

export default ProjectDescMobileComponent;
