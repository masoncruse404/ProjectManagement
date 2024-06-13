// - /src/app/_components/Modals/Desktop/NewProject/StartDateDesktop - Start Date Desktop component

// REACT
import * as React from "react";

// DAYSJS
import dayjs, { Dayjs } from "dayjs";

// MUI
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// CONTEXT
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useStartDateContext } from "@/app/_contexts/StartDateContextProviders/StartDateContextProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

// UTILS
import isVariableDefined from "@/utils/isVariableDefined";

const StartDateComponent: React.FC = () => {
  const [value, setValue] = React.useState<Dayjs>(dayjs())

  const selected_project_context = useSelectedProjectContext()
  const start_date_context = useStartDateContext()
  const new_project_modal_state_context = useNewProjectModalStatusContext()

  React.useEffect(() => { start_date_context.updateValue(value) }, [value])

  React.useEffect(() => {
    if (new_project_modal_state_context) return;
    const is_variable_defined = isVariableDefined(selected_project_context.value?.Project_ID)
    if (!is_variable_defined) return;

    setValue(dayjs(selected_project_context.value?.Start_Date))
  }, [selected_project_context.value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* Start Date Localization Provider Container Start */}
      <DemoContainer components={["DatePicker"]}>
        {/* Start Date DemoContainer Start */}
        {/* Start Date Date Picker Start */}
        <DatePicker
          value={value}
          onChange={(newValue) => setValue(newValue || dayjs())}
          sx={{
            width: "200px",
            color: "success.main",
          }}
        />
        {/* Start Date Date Picker End */}
        {/* Start Date DemoContainer End */}
      </DemoContainer>
      {/* Start Date Localization Provider Container End */}
    </LocalizationProvider>
  );
};

export default StartDateComponent
