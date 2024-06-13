// - \src\app\_components\Modals\Desktop\NewProject\ProjectTypeDesktop\ProjectTypeDesktop - Project Type Desktop component 

// REACT
import * as React from "react";

// AXIOS
import axiosInstance from '@/axiosConfig';

// MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";

// CONTEXT
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useProjectTypeContext } from "@/app/_contexts/ProjectTypeContextProviders/ProjectTypeContextProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

// INTERFACES
import { ProjectTypeInterface } from "./Interface/ProjectTypeInterface";


const ProjectTypeComponent: React.FC = () => {

  const selected_project_context = useSelectedProjectContext()
  const project_type_context = useProjectTypeContext()
  const new_project_modal_state_context = useNewProjectModalStatusContext()

  const [projectTypes, setProjectTypes] = React.useState<ProjectTypeInterface[]>([])
  const [value, setValue] = React.useState<string>("")

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value as string
    setValue(selectedValue)
    project_type_context.updateValue(selectedValue)
  };

  React.useEffect(() => {
    if (!selected_project_context.value) return;
    if (new_project_modal_state_context.value) return;

    setValue(String(selected_project_context.value?.Project_Type_ID)) 
  }, [selected_project_context.value]);

  const fetchData = async (endpoint: string, setState: any) => {
    try {
      const response = await axiosInstance.get(endpoint);
      if ( response.status === 200 ){
        setState(response.data.data)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  React.useEffect(() => { fetchData("/v1/project-types/", setProjectTypes) }, []);

  React.useEffect(() => {
    project_type_context.updateValue(value)
  }, [value]);

  return (
    <FormControl variant="standard" sx={{ width: "200px" }}>
      {/* Project Type Container FormControl Start */}
      {/* Project Type Container InputLabel Start  */}
      <InputLabel id="project-type-selection-label">Project Type</InputLabel>
      {/* Project Type Container InputLabel End  */}
      <Select  
        labelId="project-type-selection-label"
        id="project-type-selection"
        value={value}
        onChange={handleChange} 
        label="Project Types"
      >
        {/* Project Type Container Select Start */}
        {projectTypes.map && projectTypes.map(function (data) {
          return (
            <MenuItem key={data.Project_Type_ID} 
                      value={data.Project_Type_ID}
            >
              {/* Project Type Container Menu Item Start */}
              {data.Project_Type}
              {/* Project Type Container Menu Item End */}
            </MenuItem>
          );
        })}
        {/* Project Type Container Select End */}    
      </Select>
      {/* Project Type Container FormControl End */}
    </FormControl>
  );
};

export default ProjectTypeComponent;
