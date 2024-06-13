// - \src\app\_components\ProjectViewHeader\NavButtons\NavButtons -  Project View Header Nav Buttons

// REACT
import { useEffect } from "react";

// MUI
import Stack from "@mui/material/Stack";

// COMPONENTS
import AddProjectButton from "./AddProject/AddProject";
import EditProjectButton from "./EditProject/EditProject";

// CONTEXT
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";

// UTILS
import isVariableDefined from "@/utils/isVariableDefined";

export default function NavButtons() {
  const selected_project_context = useSelectedProjectContext()

  useEffect(() => { 
    isVariableDefined(selected_project_context.value?.Project_ID)
  }, [selected_project_context.value?.Project_ID])

  return (
    <Stack 
      direction="row"
      spacing={2}
      sx={{height: "40px", paddingTop:"0px"}}
    >
      <AddProjectButton />
      {selected_project_context.value?.Project_ID ? <EditProjectButton /> : null}
    </Stack>
  );
}