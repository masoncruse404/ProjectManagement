"use client"
// - /notes/src/app/_modals/Projects/NewProject/Desktop - New project desktop modal

// REACT
import { useState } from 'react';

// AXIOS
import axiosInstance from '@/axiosConfig';

// MUI
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

// COMPONENTS
import SelectClientComponent from "@/app/_components/Modals/Desktop/NewProject/SelectClientDesktop/SelectClientDesktop";
import ProjectTypeComponent from "@/app/_components/Modals/Desktop/NewProject/ProjectTypeDesktop/ProjectTypeDesktop";
import ProjectStatusComponent from "@/app/_components/Modals/Desktop/NewProject/ProjectStatusDesktop/ProjectStatusDesktop";
import StartDateComponent from "@/app/_components/Modals/Desktop/NewProject/StartDateDesktop";
import EndDateComponent from "@/app/_components/Modals/Desktop/NewProject/EndDateDesktop";
import ProjectNameDesktopComponent from "@/app/_components/Modals/Desktop/NewProject/ProjectNameDesktop/ProjectNameDesktop";
import ItContactsComponent from "@/app/_components/Modals/Desktop/NewProject/ItContacts/ItContactsDesktopComponent";
import PercentageCompleteComponent from "@/app/_components/Modals/Desktop/NewProject/PercentageCompleteDesktop";
import SupplierCompanyComponent from "@/app/_components/Modals/Desktop/NewProject/SupplierCompanyDesktop/SupplierCompanyComponent";
import ErpTypeComponent from "@/app/_components/Modals/Desktop/NewProject/ErpTypesDesktop/ErpTypesDesktop";
import EstimatedHoursComponent from "@/app/_components/Modals/Desktop/NewProject/EstimatedTimeHoursDesktop";
import CostPerHourComponent from "@/app/_components/Modals/Desktop/NewProject/CostPerHourDesktop";
import ClientContactsComponent from "@/app/_components/Modals/Desktop/NewProject/ClientContactsDesktop/ClientContactsDesktop";
import ErpContactsComponent from "@/app/_components/Modals/Desktop/NewProject/ErpContacts/ErpContactsComponent";
import SupplierContactsComponent from "@/app/_components/Modals/Desktop/NewProject/SupplierContacts/SupplierContactsDesktop";
import TotalCostComponent from "@/app/_components/Modals/Desktop/NewProject/TotalCostDesktop";
import ActualTimeHoursDesktopComponent from "@/app/_components/Modals/Desktop/NewProject/ActualTimeHoursDesktop";
import ProjectDescComponent from "@/app/_components/Modals/Desktop/NewProject/ProjectDescDesktop/ProjectDescDesktop";

// CONTEXT 
import { useSelectClientContext } from "@/app/_contexts/SelectClientContextProviders/SelectClientContextProviders";
import { useProjectNameContext } from "@/app/_contexts/ProjectNameContextProviders/ProjectNameContextProviders";
import { useClientContactsContext } from "@/app/_contexts/ClientContactsComponentProviders/ClientContactsContextProviders";
import { useItContactsContext } from "@/app/_contexts/ItContactsComponentProviders/ItContactsComponentProviders";
import { useErpTypeContext } from "@/app/_contexts/ErpTypeContextProviders/ErpTypeContextProviders";
import { useStartDateContext } from "@/app/_contexts/StartDateContextProviders/StartDateContextProviders";
import { useEndDateContext } from "@/app/_contexts/EndDateContextProviders/EndDateContextProviders";
import { usePercentageCompleteContext } from "@/app/_contexts/PercentageCompleteContextProviders/PercentageCompleteContextProviders";
import { useProjectTypeContext } from "@/app/_contexts/ProjectTypeContextProviders/ProjectTypeContextProviders";
import { useProjectStatusContext } from "@/app/_contexts/ProjectStatusContextProviders/ProjectStatusContextProviders";
import { useActualTimeHoursContext } from "@/app/_contexts/ActualHoursContextProviders/ActualHoursContextProviders";
import { useCostPerHourContext } from "@/app/_contexts/CostPerHourComponent/CostPerHourComponent";
import { useEstimatedHoursContext } from "@/app/_contexts/EstimatedHoursContextProviders/EstimatedHoursContextProviders";
import { useTotalCostContext } from "@/app/_contexts/TotalCostContextProviders/TotalCostContextProviders";
import { useNewProjectDesktopContext } from "@/app/_contexts/NewProjectDesktopContextProviders/NewProjectDesktopContextProviders";
import { useSupplierCompanyContext } from "@/app/_contexts/SupplierContextProviders/SupplierContextProviders";
import { useErpContactsContext } from "@/app/_contexts/ErpContactsContextProviders/ErpContactsContextProviders";
import { useRenderContext } from "@/app/_contexts/RenderContextProviders/RenderContextProviders";
import { useSupplierContactsContext } from "@/app/_contexts/SupplierContactsContextProviders/SupplierContactsContextProviders";
import { useProjectDescriptionContext } from "@/app/_contexts/ProjectDescriptionContextProviders/ProjectDescriptionContextProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

// STYLES
import "@/styles/scrollbar.css";
import "@/styles/utils.css";
import "@/styles/modal.css";
import "./new-project-desktop-modal.css"

// THEME
import theme from "@/theme";
import { Box, Typography } from '@mui/material';
import toast from 'react-hot-toast';

const NewProjectDesktopModal = () => {
    const [error, setError] = useState<string>("")
    const new_project_modal_state_context = useNewProjectModalStatusContext()
    const selected_client_context = useSelectClientContext()
    const project_name_context = useProjectNameContext()
    const project_desc_context = useProjectDescriptionContext()
    const client_contact_context = useClientContactsContext()
    const It_contacts_context = useItContactsContext()
    const erp_type_context = useErpTypeContext()
    const start_date_context = useStartDateContext()
    const end_date_context = useEndDateContext()
    const percentage_complete_context = usePercentageCompleteContext()
    const project_type_context = useProjectTypeContext()
    const project_status_context = useProjectStatusContext()
    const actual_time_hours_context = useActualTimeHoursContext()
    const cost_per_hour_context = useCostPerHourContext()
    const estimated_time_hours_context = useEstimatedHoursContext()
    const total_cost_context = useTotalCostContext()
    const new_project_context = useNewProjectDesktopContext()
    const supplier_company_context = useSupplierCompanyContext()
    const erp_contacts_context = useErpContactsContext()
    const render_context = useRenderContext()
    const supplier_contacts_context = useSupplierContactsContext()

    function handleModalClose(){ new_project_modal_state_context.updateValue(false) }

    function returnNewProjectData(){
        const data = {
            "Project_Name":project_name_context.value, 
            "Project_Desc":project_desc_context.value,
            "Client_ID":selected_client_context.value,
            "Start_Date":start_date_context.value, 
            "End_Date":end_date_context.value,
            "Estimated_Time_Hours":estimated_time_hours_context.value, 
            "Actual_Time_Hours":actual_time_hours_context.value,
            "Cost_Per_Hour":cost_per_hour_context.value,
            "Total_Cost":total_cost_context.value,
            "Project_Status_ID":project_status_context.value,
            "IT_Contact_ID":It_contacts_context.value,
            "Project_Type_ID":project_type_context.value,
            "ERP_Type_ID":erp_type_context.value,
            "Percentage_Complete":percentage_complete_context.value,
            "Supplier_ID": supplier_company_context.value,
            "ERP_Contacts": erp_contacts_context.value,
            "Client_Contacts": client_contact_context.value,
            "Supplier_Contacts":supplier_contacts_context.value
          }

        return data
    }

    async function submitForm(){

        const data = returnNewProjectData();

        axiosInstance.post("/v1/project/add", data).then(response => {
            if(response.status === 200){
                render_context.updateValue(!render_context.value)
                new_project_modal_state_context.updateValue(false)
                toast.success("Created project")
            }
        }).catch(error => {
            setError(error);
        })
        
    }

    if(!new_project_context.value) return;
    
    return(
      
        <Box className="modal-bg">
        {/* Modal Background Start*/}
            <Box className={theme.palette.mode === "dark" ? "wrapper-dark scrollbar-primary" : "wrapper scrollbar-primary"}>
            {/* Wrapper Start*/}
                {/* Header Desktop Container Start */}
                <Box className="header">
                    <Box>
                        <Typography variant='h6'>New Project</Typography>
                    </Box>
                    <Tooltip 
                      placement="right"
                      title="Close">
                    <Box 
                      className="modal_new_project_close"
                      onClick={handleModalClose}
                    >
                      <IconButton 
                        sx={{height:"33px", 
                             width:"33px"
                            }}>
                         <CloseIcon />
                        </IconButton>
                    </Box>
                    </Tooltip>
                </Box>
                {/* Header Desktop Container End */}
                {/* Select Client Desktop Container Start */}
                <Box className="select-client-component ml-10"><SelectClientComponent /></Box>
                {/* Select Client Desktop Container End */}
                {/* Project Type Desktop Container Start */}
                <Box className="project-type-component"><ProjectTypeComponent /></Box>
                {/* Project Type Desktop Container End */}
                {/* Project Status Desktop Container Start */}
                <Box className="project-status-component"><ProjectStatusComponent /></Box> 
                {/* Project Status Desktop Container End */}        
                {/* Date Start Desktop Container Start */}   
                <Box className="date-start"><Box ><span><Typography variant='h6'>Start Date</Typography></span></Box><StartDateComponent /></Box>
                {/* Date Start Desktop Container End */}   
                {/* Date End Desktop Container Start */}
                <Box className="date-end"><Box><span><Typography variant='h6'>End Date</Typography></span></Box><EndDateComponent /></Box>
                {/* Date End Desktop Container End */}
                {/* Project Name Desktop Container Start */}
                <Box className="project-name-component"><ProjectNameDesktopComponent width={100} suffix='%'/></Box>
                {/* Project Name Desktop Container End */}
                {/* Project Desc Desktop Container Start */}
                <Box className="project-desc-component"><ProjectDescComponent width={100} suffix={'%'} /></Box>
                {/* Project Desc Desktop Container End */}
                {/* It Contacts Desktop Container Start */}
                <Box className="It-contacts-component"><ItContactsComponent /></Box>
                {/* It Contacts Desktop Container End */}
                {/* Percentage Complete Desktop Container Start */}
                <Box className="percentage-complete-component"><PercentageCompleteComponent /></Box>
                {/* Percentage Complete Desktop Container End */}
                {/* Supplier Company / ERP Type Desktop Container Start */}
                <Box className="supplier-company-component ml-10"><SupplierCompanyComponent/><ErpTypeComponent/></Box>
                {/* Supplier Company / ERP Type Desktop Container End */}
                {/* Estimated Time Hours / Cost Per Hour Desktop Container Start */}
                <Box className="estimated-time-hours-component"><EstimatedHoursComponent/><ActualTimeHoursDesktopComponent /></Box>
                {/* Estimated Time Hours / Cost Per Hour Desktop Container End */}
                {/* Actual Time Hours / Total Cost Desktop Container Start */}
                <Box className="cost-per-hour-component"><CostPerHourComponent/><TotalCostComponent/></Box>
                {/* Actual Time Hours / Total Cost Desktop Container End */}
                <Box className="contact-container">
                {/* Contact Container Start */}
                    {/* Contact Header Start */}
                    <Box className='contact-container-header'><Typography variant='h6'>Contact Information</Typography></Box>
                    {/* Contact Header End */}
                    <Box className="contact-container-grid">
                    {/* Contact Container Grid Start */}
                        {/* Client Contacts Container Start */}
                        <Box className="client-contact-component"><ClientContactsComponent numRows={2}/></Box>
                        {/* Client Contacts Container End */}
                        {/* Supplier Contacts Container Start */}
                        <Box className="supplier-contact-component"><SupplierContactsComponent numRows={2}/></Box>
                        {/* Supplier Contacts Container End */}
                        {/* Erp Contact Container Start */}
                        <Box className="erp-contact-component"><ErpContactsComponent numRows={2}/></Box>
                        {/* Erp Contact Container End */}
                    {/* Contact Header End */}
                    </Box>   
                {/* Contact Container End */}
                </Box>
                <Box className="submit-container mb-10">
                    {/* Submit Container Start */}
                    <Button 
                      sx={{width:"100%"}}
                      variant="contained" 
                      type="submit"
                      onClick={submitForm}>
                        Submit
                    </Button>
                    {/* Submit Container End */}
                </Box>
            {/* Wrapper End*/}
            </Box>
        {/* Modal Background End*/}
        </Box>
    )

  
}

export default NewProjectDesktopModal