// - \src\app\_components\Modals\Desktop\NewProject\CostPerHourDesktop - Cost Per Hour Modal Component

// REACT
import { useEffect, useState } from "react";

// MUI
import TextField from "@mui/material/TextField";

// CONTEXT
import { useCostPerHourContext } from "@/app/_contexts/CostPerHourComponent/CostPerHourComponent";
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

const CostPerHourDesktopComponent: React.FC = () => {
    const [value, setValue] = useState<number | undefined>()

    const cost_per_hour_context = useCostPerHourContext()
    const selected_project_context = useSelectedProjectContext()
    const new_project_modal_state_context = useNewProjectModalStatusContext()

    useEffect(() => { if(typeof value === "undefined") {return} cost_per_hour_context.updateValue(value) }, [value]);

    useEffect(() => {
        if (!selected_project_context.value) return;
        if (new_project_modal_state_context.value) return;

        setValue(selected_project_context.value?.Cost_Per_Hour);
    }, [selected_project_context.value]);

    return (
        <TextField
            sx={{ width: "200px" }}
            type="number"
            id="cost-per-hour-input"
            label="Cost Per Hour"
            variant="outlined"
            value={value}
            onChange={(e) => { setValue(Number(e.target.value)) }}
        />
    );
};

export default CostPerHourDesktopComponent;
