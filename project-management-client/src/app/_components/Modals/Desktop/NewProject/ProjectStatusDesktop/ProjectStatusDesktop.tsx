// - \src\app\_components\Modals\Desktop\NewProject\ProjectStatusDesktop\xProjectStatusDesktop- Project Status Desktop

// REACT 
import * as React from "react";

// MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// CONTEXT
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useProjectStatusContext } from "@/app/_contexts/ProjectStatusContextProviders/ProjectStatusContextProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

// UTILS
import getCorsHeaders from "@/utils/getCorsHeaders";
import getBaseURL from "@/utils/getBaseURL";

// INTERFACES
import { ProjectStatusInterface } from "./Interface/ProjectStatusInterface";


const ProjectStatusComponent: React.FC = () => {
  const [value, setValue] = React.useState<string>("")
  const [projectStatus, setProjectStatus] = React.useState<ProjectStatusInterface[]>([])
  const [error, setError] = React.useState<Error | null>(null)

  const new_project_modal_state_context = useNewProjectModalStatusContext()
  const selected_project_context = useSelectedProjectContext()
  const project_status_context = useProjectStatusContext()

  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value)
    project_status_context.updateValue(event.target.value)
  };

  React.useEffect(() => { project_status_context.updateValue(value) }, [value]);

  React.useEffect(() => {
    if (!selected_project_context.value) return;
    if (new_project_modal_state_context.value) return;
   
    setValue(String(selected_project_context.value.Project_Status_ID))       
  }, [selected_project_context.value]);

  async function getFieldData(){
    const corsHeaders = getCorsHeaders()
    const res = await fetch(`${getBaseURL()}/v1/project-status/`, {
      method: "GET",
      mode: "cors",
      headers: corsHeaders,
    })
    // Check if the request was successful (status code 2xx)
    if (res.ok) {
      // If successful, log the response text
      const result = await res.json()
      const data = result.data
      setProjectStatus(data)
    }

  }
 
  React.useMemo(() => { getFieldData() }, [])

  return (
    <FormControl variant="standard" sx={{ width: "200px" }}>
      {/* Project Status Container Start */}
      {/* Project Status Input Label Start */}
      <InputLabel id="project-status-selection-label">Project Status</InputLabel>
      {/* Project Status Input Label End */}
      
      <Select 
        labelId="project-status-selection-label"
        id="project-status-selection"
        value={value}
        onChange={handleChange}
        label="Status"
      >
        {/* Project Status Select Label Start */}
        {projectStatus.map && projectStatus.map(function (data) {
          return (
            <MenuItem key={data.Project_Status_ID} 
                      value={data.Project_Status_ID}
            >
              {/* Project Status Menu Item Start */}
              {data.Project_Status}
              {/* Project Status Menu Item End */}
            </MenuItem>
          );
        })}
        {/* Project Status Select Label End */}
      </Select>
      {/* Project Status Container End */}
    </FormControl>
  );
};

export default ProjectStatusComponent;
