"use client"
// - /src/app/_modals/Projects/NewProject/Tablet/NewProjectTablet.tsx - New Project Tablet Modal

// REACT
import React, { useState } from "react";

// AXIOS
import axiosInstance from '@/axiosConfig';

// MUI
import { Box, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";

// COMPONENT
import SelectClientComponent from "@/app/_components/Modals/Desktop/NewProject/SelectClientDesktop/SelectClientDesktop";
import ProjectTypeComponent from "@/app/_components/Modals/Desktop/NewProject/ProjectTypeDesktop/ProjectTypeDesktop";
import StartDateComponent from "@/app/_components/Modals/Desktop/NewProject/StartDateDesktop";
import ProjectStatusComponent from "@/app/_components/Modals/Desktop/NewProject/ProjectStatusDesktop/ProjectStatusDesktop";
import EndDateComponent from "@/app/_components/Modals/Desktop/NewProject/EndDateDesktop";
import ProjectNameMobileComponent from "@/app/_components/Modals/Mobile/ProjectNameMobile";
import ProjectDescMobileComponent from "@/app/_components/Modals/Mobile/ProjectDescMobile";
import PercentageCompleteComponent from "@/app/_components/Modals/Desktop/NewProject/PercentageCompleteDesktop";
import SupplierCompanyComponent from "@/app/_components/Modals/Desktop/NewProject/SupplierCompanyDesktop/SupplierCompanyComponent";
import ErpTypeComponent from "@/app/_components/Modals/Desktop/NewProject/ErpTypesDesktop/ErpTypesDesktop";
import EstimatedHoursComponent from "@/app/_components/Modals/Desktop/NewProject/EstimatedTimeHoursDesktop";
import TotalCostComponent from "@/app/_components/Modals/Desktop/NewProject/TotalCostDesktop";
import ClientContactsComponent from "@/app/_components/Modals/Desktop/NewProject/ClientContactsDesktop/ClientContactsDesktop";
import SupplierContactsComponent from "@/app/_components/Modals/Desktop/NewProject/SupplierContacts/SupplierContactsDesktop";
import ErpContactsComponent from "@/app/_components/Modals/Desktop/NewProject/ErpContacts/ErpContactsComponent";
import ActualTimeHoursDesktopComponent from "@/app/_components/Modals/Desktop/NewProject/ActualTimeHoursDesktop";
import CostPerHourDesktopComponent from "@/app/_components/Modals/Desktop/NewProject/CostPerHourDesktop";
import ItContactsComponent from "@/app/_components/Modals/Desktop/NewProject/ItContacts/ItContactsDesktopComponent";

// CONTEXT
import { useNewProjectTabletContext } from "@/app/_contexts/NewProjectTabletContextProviders/NewProjectTabletContextProviders";
import { useSelectClientContext } from "@/app/_contexts/SelectClientContextProviders/SelectClientContextProviders";
import { useErpTypeContext } from "@/app/_contexts/ErpTypeContextProviders/ErpTypeContextProviders";
import { useClientContactsContext } from "@/app/_contexts/ClientContactsComponentProviders/ClientContactsContextProviders";
import { useItContactsContext } from "@/app/_contexts/ItContactsComponentProviders/ItContactsComponentProviders";
import { useStartDateContext } from "@/app/_contexts/StartDateContextProviders/StartDateContextProviders";
import { useEndDateContext } from "@/app/_contexts/EndDateContextProviders/EndDateContextProviders";
import { usePercentageCompleteContext } from "@/app/_contexts/PercentageCompleteContextProviders/PercentageCompleteContextProviders";
import { useProjectTypeContext } from "@/app/_contexts/ProjectTypeContextProviders/ProjectTypeContextProviders";
import { useProjectStatusContext } from "@/app/_contexts/ProjectStatusContextProviders/ProjectStatusContextProviders";
import { useActualTimeHoursContext } from "@/app/_contexts/ActualHoursContextProviders/ActualHoursContextProviders";
import { useCostPerHourContext } from "@/app/_contexts/CostPerHourComponent/CostPerHourComponent";
import { useEstimatedHoursContext } from "@/app/_contexts/EstimatedHoursContextProviders/EstimatedHoursContextProviders";
import { useTotalCostContext } from "@/app/_contexts/TotalCostContextProviders/TotalCostContextProviders";
import { useSupplierCompanyContext } from "@/app/_contexts/SupplierContextProviders/SupplierContextProviders";
import { useErpContactsContext } from "@/app/_contexts/ErpContactsContextProviders/ErpContactsContextProviders";
import { useRenderContext } from "@/app/_contexts/RenderContextProviders/RenderContextProviders";
import { useSupplierContactsContext } from "@/app/_contexts/SupplierContactsContextProviders/SupplierContactsContextProviders";
import { useProjectDescriptionContext } from "@/app/_contexts/ProjectDescriptionContextProviders/ProjectDescriptionContextProviders";
import { useProjectNameContext } from "@/app/_contexts/ProjectNameContextProviders/ProjectNameContextProviders";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

// STYLES
import "./new-project-tablet.css";
import "@/styles/modal.css";

// THEME
import theme from "@/theme";
import toast from "react-hot-toast";

const NewProjectTabletModal: React.FC = () => {
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
  const new_project_context = useNewProjectTabletContext()
  const supplier_company_context = useSupplierCompanyContext()
  const erp_contacts_context = useErpContactsContext()
  const render_context = useRenderContext()
  const supplier_contacts_context = useSupplierContactsContext() 

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


  function handleModalClose() { new_project_modal_state_context.updateValue(false) }

  async function submitForm(){

    const data = returnNewProjectData();

    axiosInstance.post("/v1/project/add", data).then(response => {
        if(response.status === 200){
            render_context.updateValue(!render_context.value)
            new_project_modal_state_context.updateValue(false)
            toast.success("Created project")
        }
    }).catch(error => {
      
        setError(error)
    })
 }

  if(!new_project_context.value) return;

  return (
    <Box className="modal-bg">
      {/* Modal Background Start */}
      <Box className={theme.palette.mode === "dark" ? "wrapper-tablet-dark scrollbar-primary" : "wrapper-tablet scrollbar-primary"}>
        {/* Wrapper Tablet Start */}
        {/* Header Table Start */}
        <Box className="header-tablet">
          <Box><Typography variant="h6">New Project</Typography></Box>
          <Tooltip placement="right" title="Close">
            <Box className="modal_new_project_close" onClick={handleModalClose}>
             <IconButton sx={{height:"33px", width:"33px"}}><CloseIcon /></IconButton> 
            </Box>
          </Tooltip>
        </Box>
        {/* Header Table End */}
        {/* Select Client / Project Type / Project Status Tablet Container */}
        <Box className="select-client-component-tablet">
          <Box><SelectClientComponent /></Box>
          <Box className='mt-5'><ProjectTypeComponent /></Box>
          <Box className='mt-5'><ProjectStatusComponent /></Box>
        </Box>
        {/* Select Client / Project Type / Project Status Tablet Container */}
        {/* Date Start Container Start */}
        <Box className="date-start-tablet">
          <Box><span><Typography variant="h6">Start Date</Typography></span></Box>
          <StartDateComponent /> 
          <Box className='mt-5'><span><Typography variant="h6">End Date</Typography></span></Box>
          <EndDateComponent />
        </Box>
        {/* Date Start Tablet Container End */}
        {/* Project Name Tablet Container Start */}
        <Box className="project-name-component-tablet"><ProjectNameMobileComponent /></Box>
        {/* Project Name Tablet Container End */}
        {/* Project Desc Tablet Container Start */}
        <Box className="project-desc-component-tablet"><ProjectDescMobileComponent /></Box>
        {/* Project Desc Container End */}
        {/* Percentage Complete Component Tablet Start */}
        <Box className="percentage-complete-component-tablet"><PercentageCompleteComponent /></Box>
        {/* Percentage Complete Component Tablet End */}
        {/* It Contacts Container Tablet Start */}
        <Box className="It-contacts-component-tablet"><ItContactsComponent /></Box>
        {/* It Contacts Container Tablet End */}
        {/* Supplier Company / ERP Type Tablet Container Start */}
        <Box className="supplier-company-component-tablet"><SupplierCompanyComponent /><ErpTypeComponent /></Box>
        {/* Supplier Company / ERP Type Tablet Container End */}
        {/* Estimated Time Hours / Cost Per Hour Table Container Start */}
        <Box className="estimated-time-hours-component-tablet"><EstimatedHoursComponent /><ActualTimeHoursDesktopComponent /></Box>
        {/* Estimated Time Hours / Cost Per Hour Table Container End */}
        {/* Actual Hour Component / Total Cost Table Container Start */}
        <Box className="cost-per-hour-component-tablet"><CostPerHourDesktopComponent /><TotalCostComponent /></Box>
        {/* Actual Hour Component / Total Cost Table Container End */}
        {/* Contact Container Tablet Start */}
        <Box className="contact-container-tablet">
          {/* Contact Container Header Tablet Start*/}
          <Box className='contact-container-header-tablet'><Typography variant="h6">Contact Information</Typography></Box>
          {/* Contact Container Header Tablet End*/}
          <Box className="contact-container-grid-tablet">
            {/* Contact Container Grid Tablet Start */}
            {/* Client Contacts Tablet Container Start */}
            <Box className="client-contact-component-tablet mt-20"><ClientContactsComponent numRows={2}/></Box>
            {/* Client Contacts Tablet Container End */}
            {/* Supplier Contacts Tablet Component Start*/}
            <Box className="supplier-contact-component-tablet mt-20"><SupplierContactsComponent numRows={2}/></Box>
            {/* Supplier Contacts Tablet Component End */}
            {/* ERP Contact Tablet Component Start */}
            <Box className="erp-contact-component-tablet mt-20"><ErpContactsComponent numRows={2}/></Box>
            {/* ERP Contact Tablet Component End */}
            {/* Contact Container Grid Tablet End */}
          </Box>
        </Box>
        {/* Contact Container Tablet Start */}
        <Box className="submit-container-tablet">
          {/* Contact Container Button Start */}
          <Button sx={{ width: "100%" }} variant="contained" type="submit" onClick={submitForm}>Submit</Button>
          {/* Contact Container Button End */}
        </Box>
        {/* Wrapper Tablet Start */}
      </Box>
      {/* Modal Background End */}
    </Box>
  );
}

export default NewProjectTabletModal;


