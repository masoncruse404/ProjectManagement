// - /src/app/_components/Modals/Desktop/NewProject/SupplierContacts/SupplierContactsDesktop - Supplier Contacts Desktop component

// REACT
import { useEffect, useState } from "react";

// MUI
import TextField from "@mui/material/TextField";

// CONTEXT
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useSupplierContactsContext } from "@/app/_contexts/SupplierContactsContextProviders/SupplierContactsContextProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

// INTERFACE
import { SupplierContactsInterface } from "./Interface/SupplierContactsInterface";

const SupplierContactsDesktopComponent: React.FC<SupplierContactsInterface> = ({numRows}) => {
    const [value, setValue] = useState("")

    const supplier_contacts_context = useSupplierContactsContext()
    const new_project_modal_state_context = useNewProjectModalStatusContext()
    const selected_project_context = useSelectedProjectContext()

    useEffect(() => { supplier_contacts_context.updateValue(value) }, [value])

    useEffect(() => {
      if(new_project_modal_state_context.value) return;
      if(!selected_project_context.value) return;

      setValue(selected_project_context.value.Supplier_Contacts)
    }, [selected_project_context.value])
    
    return (
        <TextField multiline rows={numRows} 
            sx={{  width: "220px", 
                  fontSize: "10px"
              }} 
            id="supplier-contacts-input" 
            label="Supplier Contacts"
            variant="outlined"
            value={value}
            onChange={(event) => { setValue(event.target.value) }}
          />
    );
}

export default SupplierContactsDesktopComponent;