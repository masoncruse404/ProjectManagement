// - /src/app/_components/Modals/Desktop/NewProject/SupplierCompanyDesktop  - Supplier Company Desktop component

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
import { useSupplierCompanyContext } from "@/app/_contexts/SupplierContextProviders/SupplierContextProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

// INTERFACES
import { SupplierCompanyStateInterface } from "./Interface/SupplierCompanyStateInterface";

const SupplierCompanyComponent: React.FC = () => {

  const selected_supplier_context = useSupplierCompanyContext()
  const selected_project_context = useSelectedProjectContext()
  const new_project_modal_state_context = useNewProjectModalStatusContext()

  const [value, setValue] = React.useState<string>("")
  const [supplierList, setSupplierList] = React.useState<SupplierCompanyStateInterface[]>([])

  const handleChange = (event: SelectChangeEvent<string>) => { 
    event.preventDefault()
    setValue(event.target.value)
  }

  React.useEffect(() => { selected_supplier_context.updateValue(Number(value)) }, [value])

  async function getFieldData(){
    const corsHeaders = getCorsHeaders()
    const res = await fetch(`${getBaseURL()}/v1/suppliers`, {
      method: "GET",
      mode: "cors",
      headers: corsHeaders,
    })

    if (res.ok) {
      const result = await res.json()
      const data = result.data
      setSupplierList(data)
    }

  }
 
  React.useMemo(() => { getFieldData() }, [])

  React.useEffect(() => {
    if (!selected_project_context.value) return;
    if (new_project_modal_state_context.value) return;

    if (selected_project_context.value.Supplier_ID) {
      setValue(String(selected_project_context.value.Supplier_ID))
    }
  }, [selected_project_context.value]);

  return (
    <FormControl
      variant="standard"
      sx={{ width: '200px',
            marginTop: '5px',
            marginBottom: '5px' 
          }}
      >
      {/* Supplier Company Form Control Container Start */}
      {/* Supplier Company Input Label Container Start */}
      <InputLabel id="supplier-company-selection-label">Supplier Company</InputLabel>
      {/* Supplier Company Input Label Container End */}
      {/* Supplier Company Select Container Start */}
      <Select
        required
        labelId="project-status-selection-label"
        id="project-status-selection"
        value={value}
        onChange={handleChange}
        label="Supplier Company"
      >
        {supplierList.map &&
          supplierList.map((data, index) => (
            <MenuItem key={index} value={data.Supplier_ID}>
              {/* Supplier Company Select Menu Item Start  */}
              {data.Supplier_Company}
              {/* Supplier Company Select Menu Item End  */}
            </MenuItem>
          ))}
      {/* Supplier Company Select Container End */}
      </Select>
    {/* Supplier Company Form Control Container Start */}
    </FormControl>
  );
};

export default SupplierCompanyComponent
