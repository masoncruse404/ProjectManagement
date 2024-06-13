// - \src\app\_components\Modals\Desktop\NewProject\EstimatedTimeHoursDesktop - Estimated Time Hours Modal Desktop Component

// REACT
import { useEffect, useState } from "react";

// MUI
import TextField from "@mui/material/TextField";

// CONTEXT
import { useEstimatedHoursContext } from "@/app/_contexts/EstimatedHoursContextProviders/EstimatedHoursContextProviders";
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

const EstimatedHoursComponent: React.FC = () => {
    const [hours, setHours] = useState<number | undefined>()

    const estimated_time_hours_context = useEstimatedHoursContext()
    const selected_project_context = useSelectedProjectContext()
    const new_project_modal_state_context = useNewProjectModalStatusContext()

    useEffect(() => {
        if (!selected_project_context.value) return;
        if (new_project_modal_state_context.value) return;

        setHours(selected_project_context.value?.Estimated_Time_Hours)
    }, [selected_project_context.value])

    return (
        <TextField
            id="estimated-time-hours-input"
            type="number"
            sx={{ width: "200px" }}
            value={hours}
            label="Estimated Hours"
            variant="outlined"
            onChange={(e) => {
                setHours(Number(e.target.value))
                estimated_time_hours_context.updateValue(Number(e.target.value))
            }}
        />
    );
};

export default EstimatedHoursComponent
