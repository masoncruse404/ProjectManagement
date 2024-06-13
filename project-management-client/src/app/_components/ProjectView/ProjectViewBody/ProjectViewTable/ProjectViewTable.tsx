// - \src\app\_components\ProjectView\ProjectViewBody\ProjectViewTable\ProjectViewTable - Project View Project Table Component

// REACT
import * as React from "react";

// AXIOS
import axiosInstance from '@/axiosConfig';

// MUI
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Skeleton } from "@mui/material";

// STYLES
import "../../../../../styles/scrollbar.css"

// CONTEXT 
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useRenderContext } from "@/app/_contexts/RenderContextProviders/RenderContextProviders";

// UTILS
import parseDate from "../../../../../utils/parseDate";

// maps
import { PROJECT_STATUS_MAP } from "@/lib/types/ProjectStatusType";
const StyledTableCell = styled(TableCell)(({ theme }: any) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }: any) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ProjectViewTable: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<Error | null>(null)
  const [clientName, setClientName] = React.useState<string>("")
  const selected_project_context = useSelectedProjectContext()
  const render_context = useRenderContext()

  React.useEffect(() => {
    if(!selected_project_context.value?.Project_ID) return;

    axiosInstance.get(`/v1/projects/${selected_project_context.value?.Project_ID}/`)
      .then((response: any) => {
        selected_project_context.updateValue(response.data.data)
      })
      .catch((error: any) => {setError(error)})
    
  },[render_context.value])

 React.useEffect(() => {
  if(!selected_project_context.value?.Project_ID) return
   
    axiosInstance.get(`/v1/projects/${selected_project_context.value?.Project_ID}/client`)
    .then((response: any) => {
      setClientName(response.data.data)
    })
    .catch((error: any) => {setError(error)})

 }, [selected_project_context.value])

  return (
    <TableContainer component={Paper} sx={{ marginBottom: 1 }} className="scrollbar-table-primary">
      <Table sx={{ width: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Client Name</StyledTableCell>
            <StyledTableCell align="left">Project Name</StyledTableCell>
            <StyledTableCell align="left">Project Status</StyledTableCell>
            <StyledTableCell align="left">% Complete</StyledTableCell>
            <StyledTableCell align="left">Start Date</StyledTableCell>
            <StyledTableCell align="left">End Date</StyledTableCell>
            <StyledTableCell align="left">Cost</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
               {loading ? <Skeleton /> : clientName}
            </StyledTableCell>
            <StyledTableCell align="left">{loading ? <Skeleton /> : selected_project_context.value?.Project_Name}</StyledTableCell>
            <StyledTableCell align="left">{loading ? <Skeleton /> : PROJECT_STATUS_MAP.get(selected_project_context.value?.Project_Status_ID || 0)}</StyledTableCell>
            <StyledTableCell align="left">{loading ? <Skeleton /> : selected_project_context.value?.Percentage_Complete}</StyledTableCell>
            <StyledTableCell align="left">{loading ? <Skeleton /> : parseDate(selected_project_context.value?.Start_Date)}</StyledTableCell>
            <StyledTableCell align="left">{loading ? <Skeleton /> : parseDate(selected_project_context.value?.End_Date)}</StyledTableCell>
            <StyledTableCell align="left">{loading ? <Skeleton /> : selected_project_context.value?.Total_Cost} </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectViewTable;
