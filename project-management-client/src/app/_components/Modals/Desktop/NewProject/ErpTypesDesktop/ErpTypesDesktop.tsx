// - \src\app\_components\Modals\Desktop\NewProject\ErpTypesDesktop\ErpTypesDesktop - Erp Type Desktop component 

// REACT
import * as React from "react";

// UTILS
import getBaseURL from "@/utils/getBaseURL";
import getCorsHeaders from "@/utils/getCorsHeaders";

// MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// CONTEXT
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useErpTypeContext } from "@/app/_contexts/ErpTypeContextProviders/ErpTypeContextProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

// INTERFACE
import { ErpTypeInterface } from "./Interface/ErpTypesDesktopInterface";

const ErpTypeComponent: React.FC = () => {
  const [value, setValue] = React.useState<string>("");
  const [erpTypes, setErpTypes] = React.useState<ErpTypeInterface[] | null>(null);

  const selected_project_context = useSelectedProjectContext()
  const erp_type_context = useErpTypeContext()
  const new_project_modal_state_context = useNewProjectModalStatusContext()

  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value as string);
    erp_type_context.updateValue(event.target.value as string)
  };

  React.useEffect(() => { erp_type_context.updateValue(value) }, [value]);

  async function getFieldData(){
    const corsHeaders = getCorsHeaders()
    const serverUrl = process.env.NEXT_PUBLIC_ENV_API_URL || "http://localhost:3770"
    const res = await fetch(`${serverUrl}/v1/erp-types`, {
      method: "GET",
      mode: "cors",
      headers: corsHeaders,
    })
    // Check if the request was successful (status code 2xx)
    if (res.ok) {
    
      // If successful, log the response text
      const result = await res.json()
      const data = result.data
      setErpTypes(data)
    }

  }
 
  React.useMemo(() => { getFieldData() }, [])

  React.useEffect(() => {
    if (!selected_project_context.value) return;
    if (new_project_modal_state_context.value) return;

    setValue(String(selected_project_context.value?.ERP_Type_ID));
  }, [selected_project_context.value]);

  return (
    <FormControl className="erp-type-component" variant="standard" sx={{ width: "200px" }}>
      {/* Erp Type FormControl Container Start */}
      {/* Erp Type InputLabel Container Start */}
      <InputLabel id="demo-simple-select-standard-label-erp-type">ERP Type</InputLabel>
      {/* Erp Type InputLabel Container End */}
      
      <Select
        labelId="demo-simple-select-standard-label-erp-type"
        id="erp-type-selection"
        value={value}
        onChange={handleChange}
        label="ERP Type"
      >
        {/* Erp Type Select Container Start */}
        {erpTypes &&
          erpTypes.map((data, index) => (
            <MenuItem key={index} 
                      value={data.ERP_Type_ID}
            >
              {/* Erp Type Menu Item Container Start */}
              {data.ERP_Type}
              {/* Erp Type Menu Item Container End */}
            </MenuItem>
          ))}
        {/* Erp Type Select Container End */}
      </Select>
      {/* Erp Type FormControl Container End */}
    </FormControl>
  );
};

export default ErpTypeComponent;
