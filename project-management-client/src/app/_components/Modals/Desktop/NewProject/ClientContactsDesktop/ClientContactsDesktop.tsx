// - \src\app\_components\Modals\Desktop\NewProject\ClientContactsDesktop\ClientContactsDesktop - Client Contacts Desktop Component

// REACT
import * as React from "react";

// MUI
import TextField from "@mui/material/TextField";

// CONTEXT
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useClientContactsContext } from "@/app/_contexts/ClientContactsComponentProviders/ClientContactsContextProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

// STYLES
import "./client-contacts-desktop.css";

// INTERFACE
import { ClientContactsDesktopInterface } from "./Interface/ClientContactsDesktopInterface";

const ClientContactsComponent: React.FC<ClientContactsDesktopInterface> = ({numRows}) => {
    const [value, setValue] = React.useState<string>("");

    const selected_project_context = useSelectedProjectContext()
    const client_contacts_context = useClientContactsContext()
    const new_project_modal_state_context = useNewProjectModalStatusContext()
   
    React.useEffect(() => {
        if(!selected_project_context.value) return;
        if(new_project_modal_state_context.value) return;

        if (selected_project_context.value.Client_Contacts) {
            setValue(selected_project_context.value.Client_Contacts);
            client_contacts_context.updateValue(selected_project_context.value.Client_Contacts)
        }
        
    }, [selected_project_context.value]);

    React.useEffect(() => {
        client_contacts_context.updateValue(value)
    }, [value])

    return (
        <TextField
            multiline
            rows={numRows}
            sx={{ width: "220px", fontSize: "10px" }}
            id="client-contacts-input"
            label="Client Contacts"
            variant="outlined"
            value={value}
            onChange={(event) => { setValue(event.target.value) }}
        />
    );
};

export default ClientContactsComponent;


