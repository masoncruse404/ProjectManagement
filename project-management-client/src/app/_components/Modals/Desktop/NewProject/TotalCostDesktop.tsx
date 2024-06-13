// - /src/app/_components/Modals/Desktop/NewProject/TotalCostDesktop - Total Cost component

// REACT
import { useEffect, useState } from "react";

// MUI
import TextField from "@mui/material/TextField";

// CONTEXT
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useTotalCostContext } from "@/app/_contexts/TotalCostContextProviders/TotalCostContextProviders";
import { useProjectStatusContext } from "@/app/_contexts/ProjectStatusContextProviders/ProjectStatusContextProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

const TotalCostComponent: React.FC = () => {
  const [value, setValue] = useState<number | undefined>()

  const selected_project_context = useSelectedProjectContext()
  const new_project_modal_state_context = useNewProjectModalStatusContext()
  const total_cost_context = useTotalCostContext()
  const new_project_context = useProjectStatusContext()

  useEffect(() => {}, [new_project_context.value]);

  useEffect(() => {
    if (!selected_project_context.value) return;
    if (new_project_modal_state_context.value) return;

    setValue(selected_project_context.value.Total_Cost)
  }, [selected_project_context.value])

  return (
    <TextField
      sx={{ width: "200px" }}
      type="number"
      id="total-cost-input"
      label="Total Cost"
      variant="outlined"
      value={value}
      onChange={(event) => {
        setValue(Number(event.target.value));
        total_cost_context.updateValue(Number(event.target.value))
      }}
    />
  );
};

export default TotalCostComponent;
