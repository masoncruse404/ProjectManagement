// - \src\app\_components\Modals\Desktop\NewProject\ProjectNameDesktop\ProjectNameDesktop.ts - Project Name Desktop component

// REACT
import React, { useEffect, useState } from "react";

// MUI
import TextField from "@mui/material/TextField";

// CONTEXT
import { useProjectNameContext } from "@/app/_contexts/ProjectNameContextProviders/ProjectNameContextProviders";
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

// INTERFACES
import { ProjectNameComponentInterface } from "./Interface/ProjectNameInterface";

const ProjectNameComponent: React.FC<ProjectNameComponentInterface> = ({width, suffix}) => {
  const [projectName, setProjectName] = useState<string>("")

  const project_name_context = useProjectNameContext()
  const selected_project_context = useSelectedProjectContext()
  const new_project_modal_state_context = useNewProjectModalStatusContext()

  useEffect(() => { project_name_context.updateValue(projectName) }, [projectName])

  useEffect(() => {
    if (!selected_project_context.value) return;
    if (new_project_modal_state_context.value) return;

    setProjectName(selected_project_context.value.Project_Name)
  }, [selected_project_context.value]);

  return (
    <TextField
      sx={{ width: `${width}${suffix}`, fontSize:"10px" }}
      id="project-name-input"
      label="Project Name"
      variant="outlined"
      value={projectName}
      onChange={(event) => {
        setProjectName(event.target.value);
      }}
    />
  );
};

export default ProjectNameComponent;
