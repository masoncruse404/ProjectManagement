// - \src\app\_components\Modals\Desktop\NewProject\SelectClientDesktop\SelectClientDesktop - Select Client Desktop component 


// REACT
import * as React from "react";

// MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";

// UTILS
import getBaseURL from "@/utils/getBaseURL";
import getCorsHeaders from "@/utils/getCorsHeaders";

// CONTEXT
import { useSelectClientContext } from "@/app/_contexts/SelectClientContextProviders/SelectClientContextProviders";
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useNewProjectStatusContext } from "@/app/_contexts/NewProjectStatusContextProviders/NewProjectStatusContextProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

// INTERFACE
import { SelectClientStateInterface } from "./Interface/SelectClientStateInterface";

const SelectClientComponent: React.FC = () => {
  const [clients, setClients] = React.useState<SelectClientStateInterface[]>([])
  const [value, setValue] = React.useState<string>("")

  const selected_client_context = useSelectClientContext()
  const selected_project_context = useSelectedProjectContext()
  const new_project_context = useNewProjectStatusContext()
  const new_project_modal_state_context = useNewProjectModalStatusContext()

  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value as string)
    selected_client_context.updateValue(event.target.value)
  };

  React.useEffect(() => {}, [new_project_context.value, clients]);

  React.useEffect(() => { selected_client_context.updateValue(value) }, [value]);

  async function getFieldData(){
    const corsHeaders = getCorsHeaders()
    const serverUrl = process.env.NEXT_PUBLIC_ENV_API_URL || "http://localhost:3770"
    const res = await fetch(`${serverUrl}/v1/client`, {
      method: "GET",
      mode: "cors",
      headers: corsHeaders,
    })
    // Check if the request was successful (status code 2xx)
    if (res.ok) {
      // If successful, log the response text
      const result = await res.json()
      const data = result.data
      setClients(data)
    }

  }
 
  React.useMemo(() => { getFieldData() }, [])

  React.useEffect(() => {
    if (!selected_project_context.value) return;
    if (new_project_modal_state_context.value) return;

    if (typeof selected_project_context.value.Client_ID !== "undefined") {
      setValue(String(selected_project_context.value.Client_ID))
      selected_client_context.updateValue(String(selected_project_context.value.Client_ID))
    }
  }, [selected_project_context.value]);


  return (
    <FormControl variant="standard" sx={{ width: "200px" }}>
      {/* Select Client Container Start */}
      {/* Select Client InputLabel Start */}
      <InputLabel id="clients-selection-label">Select Client</InputLabel>
      {/* Select Client InputLabel End */}
      <Select
        required
        labelId="project-status-selection-label"
        id="project-status-selection"
        value={value}
        onChange={handleChange}
        label="Select Client"
      >
        {/* Select Client Select Input Start */}
        {clients.map &&
          clients.map((data) => (
            <MenuItem key={data.Client_ID} 
                      value={data.Client_ID}
            >
              {/* Select Client Select Menu Item Start */}
              {data.Client_Name}
              {/* Select Client Select Menu Item Start */}
            </MenuItem>
          ))}
        {/* Select Client Select Input Start */}
      </Select>
      {/* Select Client Container End */}
    </FormControl>
  );
};

export default SelectClientComponent
