// - \src\app\_components\Modals\Desktop\NewProject\ErpContactsComponent - Erp Contacts Modal Component

// REACT
import { useEffect, useState } from "react";

// MUI
import TextField from "@mui/material/TextField";

// CONTEXTS
import { useErpContactsContext } from "@/app/_contexts/ErpContactsContextProviders/ErpContactsContextProviders";
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

const ErpContactsComponent: React.FC = () => {
    const [value, setValue] = useState<string>("")

    const erp_contacts_context = useErpContactsContext()
    const new_project_modal_state_context = useNewProjectModalStatusContext()
    const selected_project_context = useSelectedProjectContext()

    useEffect(() => { erp_contacts_context.updateValue(value) }, [value])

    useEffect(() => {
        if (new_project_modal_state_context.value) return;
        if (!selected_project_context.value) return;

        setValue(selected_project_context.value.ERP_Contacts)
        erp_contacts_context.updateValue(selected_project_context.value.ERP_Contacts)
    }, [selected_project_context.value])

    return (
        <TextField
            multiline
            rows={2}
            sx={{ width: "200px", fontSize: "10px" }}
            id="erp-contacts-input"
            label="ERP Contacts"
            variant="outlined"
            value={value}
            onChange={(event) => { setValue(event.target.value) }}
        />
    );
};

export default ErpContactsComponent
