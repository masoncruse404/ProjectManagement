// - \src\app\_components\Modals\Desktop\NewProject\ActualTimeHoursDesktop - Actual Time Hours Modal Component

// REACT
import { useEffect, useState } from "react";

// MUI
import TextField from "@mui/material/TextField";

// CONTEXT
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useActualTimeHoursContext } from "@/app/_contexts/ActualHoursContextProviders/ActualHoursContextProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

// UTILS
import isVariableDefined from "@/utils/isVariableDefined";

const ActualTimeHoursDesktopComponent: React.FC = () => {
  const [value, setValue] = useState<number | undefined>()

  const selected_project_context = useSelectedProjectContext()
  const actual_time_hours_context = useActualTimeHoursContext()
  const new_project_modal_state_context = useNewProjectModalStatusContext()

  useEffect(() => { if(typeof value === "undefined") return; actual_time_hours_context.updateValue(value) }, [value]);

  useEffect(() => {
    const is_variable_defined = isVariableDefined(selected_project_context.value?.Project_ID)
    if (!is_variable_defined) return;
    if (new_project_modal_state_context.value) return;

    if(!selected_project_context.value) return;
    setValue(selected_project_context.value.Actual_Time_Hours)
  }, [selected_project_context.value]);

  return (
    <TextField
      sx={{ width: "200px" }}
      type="number"
      id="actual-time-hours-input"
      label="Actual Time Hours"
      variant="outlined"
      value={value}
      onChange={(event) => { setValue(Number(event.target.value)) }}
    />
  );
};

export default ActualTimeHoursDesktopComponent
