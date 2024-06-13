// - \src\app\_components\Modals\Desktop\NewProject\PercentageCompleteDesktop - Percentage Complete Desktop Modal Component

// REACT
import React, { useEffect, useState } from "react";

// MUI
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

// CONTEXTS
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { usePercentageCompleteContext } from "@/app/_contexts/PercentageCompleteContextProviders/PercentageCompleteContextProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

interface Mark {
  value: number;
  label: string;
}

const marks: Mark[] = [
  { value: 0, label: "0" },
  { value: 20, label: "20" },
  { value: 40, label: "40" },
  { value: 60, label: "60" },
  { value: 80, label: "80" },
  { value: 100, label: "100" },
];

function valuetext(value: number) {
  return `${value}°C`;
}

const PercentageCompleteComponent: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const selected_project_context = useSelectedProjectContext()
  const percentage_complete_context = usePercentageCompleteContext()
  const new_project_modal_state_context = useNewProjectModalStatusContext()

  useEffect(() => { percentage_complete_context.updateValue(value) }, [value])

  useEffect(() => {
    if (!selected_project_context.value) return;
    if (new_project_modal_state_context.value) return;

    setValue(selected_project_context.value.Percentage_Complete)
  }, [selected_project_context.value]);

  return (
    <Box>
      {/* Percentage Complete Container Start */}
      <FormControl sx={{ width: "75%" }} component="fieldset" variant="standard">
        {/* Percentage Complete FormControl Container Start */}
        {/* Percentage Complete FormLabel Start */}
        <FormLabel component="legend">Percentage Complete</FormLabel>
        {/* Percentage Complete FormLabel End */}
        {/* Percentage Complete Slider Start */}
        <Slider
          aria-label="Custom marks"
          defaultValue={!new_project_modal_state_context.value ? selected_project_context.value?.Percentage_Complete : 0}
          getAriaValueText={valuetext}
          step={20}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={(e, newValue) => setValue(newValue as number)}
          sx={{ marginTop: "12.5px", marginLeft: "11.125px" }}
        />
        {/* Percentage Complete Slider End */}
        {/* Percentage Complete FormControl Container End */}
      </FormControl>
      {/* Percentage Complete Container End */}
    </Box>
  );
};

export default PercentageCompleteComponent
