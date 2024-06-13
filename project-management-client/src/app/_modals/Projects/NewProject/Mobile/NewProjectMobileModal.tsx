"use client"
// - /src/app/_modals/Projects/NewProject/Mobile/NewProjectMobileModal.tsx - New Project Mobile modal

// REACT
import React, { useState } from "react";

// AXIOS
import axiosInstance from '@/axiosConfig';

// MUI
import { Box, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";

// COMPONENTS
import SelectClientComponent from "@/app/_components/Modals/Desktop/NewProject/SelectClientDesktop/SelectClientDesktop";
import ProjectNameComponent from "@/app/_components/Modals/Desktop/NewProject/ProjectNameDesktop/ProjectNameDesktop";
import ProjectDescComponent from "@/app/_components/Modals/Desktop/NewProject/ProjectDescDesktop/ProjectDescDesktop";
import StartDateComponent from "@/app/_components/Modals/Desktop/NewProject/StartDateDesktop";
import EndDateComponent from "@/app/_components/Modals/Desktop/NewProject/EndDateDesktop";
import ProjectTypeComponent from "@/app/_components/Modals/Desktop/NewProject/ProjectTypeDesktop/ProjectTypeDesktop";
import ProjectStatusComponent from "@/app/_components/Modals/Desktop/NewProject/ProjectStatusDesktop/ProjectStatusDesktop";
import PercentageCompleteComponent from "@/app/_components/Modals/Desktop/NewProject/PercentageCompleteDesktop";
import EstimatedHoursComponent from "@/app/_components/Modals/Desktop/NewProject/EstimatedTimeHoursDesktop";
import TotalCostComponent from "@/app/_components/Modals/Desktop/NewProject/TotalCostDesktop";
import ErpTypeComponent from "@/app/_components/Modals/Desktop/NewProject/ErpTypesDesktop/ErpTypesDesktop";
import SupplierCompanyComponent from "@/app/_components/Modals/Desktop/NewProject/SupplierCompanyDesktop/SupplierCompanyComponent";
import ClientContactsComponent from "@/app/_components/Modals/Desktop/NewProject/ClientContactsDesktop/ClientContactsDesktop";
import SupplierContactsComponent from "@/app/_components/Modals/Desktop/NewProject/SupplierContacts/SupplierContactsDesktop";
import ErpContactsComponent from "@/app/_components/Modals/Desktop/NewProject/ErpContacts/ErpContactsComponent";
import ItContactsComponent from "@/app/_components/Modals/Desktop/NewProject/ItContacts/ItContactsDesktopComponent";
import CostPerHourDesktopComponent from "@/app/_components/Modals/Desktop/NewProject/CostPerHourDesktop";
import ActualTimeHoursDesktopComponent from "@/app/_components/Modals/Desktop/NewProject/ActualTimeHoursDesktop";

// CONTEXT
import { useSupplierContactsContext } from "@/app/_contexts/SupplierContactsContextProviders/SupplierContactsContextProviders";
import { useSelectClientContext } from "@/app/_contexts/SelectClientContextProviders/SelectClientContextProviders";
import { useProjectNameContext } from "@/app/_contexts/ProjectNameContextProviders/ProjectNameContextProviders";
import { useProjectDescriptionContext } from "@/app/_contexts/ProjectDescriptionContextProviders/ProjectDescriptionContextProviders";
import { useClientContactsContext } from "@/app/_contexts/ClientContactsComponentProviders/ClientContactsContextProviders";
import { useItContactsContext } from "@/app/_contexts/ItContactsComponentProviders/ItContactsComponentProviders";
import { useErpTypeContext } from "@/app/_contexts/ErpTypeContextProviders/ErpTypeContextProviders";
import { useStartDateContext } from "@/app/_contexts/StartDateContextProviders/StartDateContextProviders";
import { useEndDateContext } from "@/app/_contexts/EndDateContextProviders/EndDateContextProviders";
import { usePercentageCompleteContext } from "@/app/_contexts/PercentageCompleteContextProviders/PercentageCompleteContextProviders";
import { useProjectTypeContext } from "@/app/_contexts/ProjectTypeContextProviders/ProjectTypeContextProviders";
import { useProjectStatusContext } from "@/app/_contexts/ProjectStatusContextProviders/ProjectStatusContextProviders";
import { useActualTimeHoursContext } from "@/app/_contexts/ActualHoursContextProviders/ActualHoursContextProviders";
import { useEstimatedHoursContext } from "@/app/_contexts/EstimatedHoursContextProviders/EstimatedHoursContextProviders";
import { useTotalCostContext } from "@/app/_contexts/TotalCostContextProviders/TotalCostContextProviders";
import { useSupplierCompanyContext } from "@/app/_contexts/SupplierContextProviders/SupplierContextProviders";
import { useErpContactsContext } from "@/app/_contexts/ErpContactsContextProviders/ErpContactsContextProviders";
import { useRenderContext } from "@/app/_contexts/RenderContextProviders/RenderContextProviders";
import { useCostPerHourContext } from "@/app/_contexts/CostPerHourComponent/CostPerHourComponent";
import { useNewProjectModalStatusContext } from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";

// STYLES
import "./new-project-mobile-modal.css";

// THEME
import theme from "@/theme";
import toast from "react-hot-toast";

const NewProjectMobileModal: React.FC = () => {
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

  async function submitForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    const data = returnNewProjectData();

    axiosInstance.post("/v1/project/add", data).then(response => {
      if (response.status === 200) {
        render_context.updateValue(!render_context.value)
        new_project_modal_state_context.updateValue(false)
        toast.success("Created project")
      }

    }).catch(error => {
      setError(error);
    });

  }

  function handleModalClose(event: React.MouseEvent<HTMLElement>) {
    new_project_modal_state_context.updateValue(false)
  }

  return (
    <Box className={theme.palette.mode === "dark" ? "wrapper-mobile-dark scrollbar-primary" : "wrapper-mobile scrollbar-primary"}>
      {/* Wrapper Mobile Start */}
      {/* Header Mobile Start */}
      <Box className="header-mobile"><Box><Typography variant="h6">New Project</Typography></Box><Tooltip title="Close"><Box className="modal_new_project_close" onClick={(event) => { handleModalClose(event) }}><IconButton sx={{height:"33px", width:"33px"}}><CloseIcon /></IconButton> </Box></Tooltip></Box>
      {/* Header Mobile End */}
      {/* Select Client Container Mobile Start */}
      <Box className="select-client-component-mobile"><SelectClientComponent /></Box>
      {/* Select Client Container Mobile End */}
      {/* Project Name Container Mobile Start */}
      <Box className="project-name-component-mobile"><ProjectNameComponent width={200} suffix={"px"} /></Box>
      {/* Project Name Container Mobile End */}
      {/* Project Desc Container Mobile Start */}
      <Box className="project-desc-component-mobile"><ProjectDescComponent width={200} suffix={'px'} /></Box>
      {/* Project Desc Container Mobile End */}
      {/* Date Start Mobile Start */}
      <Box className="date-start-mobile"><Box><span><Typography variant="h6">Start Date</Typography></span></Box><StartDateComponent /></Box>
      {/* Date Start Mobile End */}
      {/* Date End Mobile Start */}
      <Box className="date-end-mobile"><Box><span><Typography variant="h6">End Date</Typography></span></Box><EndDateComponent /></Box>
      {/* Date End Mobile End */}
      {/* Project Type / Status Container Mobile Start */}
      <Box className="project-type-component-mobile d-flex flex-direction-column"><ProjectTypeComponent /><ProjectStatusComponent /></Box>
      {/* Project Type / Status Container Mobile End */}
      {/* It Contacts Container Mobile Start */}
      <Box className="It-contacts-component-mobile"><ItContactsComponent /></Box>
      {/* It Contacts Container Mobile End */}
      {/* Percentage Complete Container Mobile Start */}
      <Box className="percentage-complete-component-mobile"><PercentageCompleteComponent /></Box>
      {/* Percentage Complete Container Mobile End */}
      {/* Estimated Time Hours / Cost Per Hour Container Mobile Start */}
      <Box className="estimated-time-hours-component-mobile"><EstimatedHoursComponent /><ActualTimeHoursDesktopComponent /></Box>
      {/* Estimated Time Hours  / Cost Per Hour Container Mobile End */}
      {/* Actual Time Hours / Total Cost Container Mobile Start */}
      <Box className="cost-per-hour-component-mobile"><CostPerHourDesktopComponent /><TotalCostComponent /></Box>
      {/* Actual Time Hours / Total Cost Container Mobile End */}
      {/* Supplier Company Component Mobile Start */}
      <Box className="supplier-company-component-mobile"><SupplierCompanyComponent /><ErpTypeComponent /></Box>
      {/* Supplier Company Component Mobile End */}
      <Box className="contact-container-mobile">
        {/* Contact Container Mobile Start */}
        {/* Contact Container Header Mobile Start */}
        <Box className='contact-container-header-mobile'><Typography variant="h6">Contact Information</Typography></Box>
        {/* Contact Container Header Mobile End */}
        <Box className="contact-container-grid-mobile">
          {/* Contact Container Grid Mobile Start */}
          {/* Client Contacts Component Mobile Start */}
          <Box className="client-contact-component-mobile mt-10"><ClientContactsComponent numRows={2}/></Box>
          {/* Client Contacts Component Mobile End */}
          {/* Supplier Contact Component Mobile Start */}
          <Box className="supplier-contact-component-mobile"><SupplierContactsComponent numRows={2}/></Box>
          {/* Supplier Contact Component Mobile End */}
          {/* ERP Contacts Component Mobile Start */}
          <div className="erp-contact-component-mobile"><ErpContactsComponent numRows={2}/></div>
          {/* ERP Contacts Component Mobile End */}
          {/* Contact Container Grid Mobile End */}
        </Box>
      </Box>
      {/* Contact Container Mobile End */}
      <Box className="submit-container-mobile">
        {/* Submit Container Start */}
        <Button sx={{ width: "100%", marginBottom: "20px" }} variant="contained" type="submit" onClick={submitForm}>
          Submit
        </Button>
        {/* Submit Container End */}
      </Box>
      {/* Wrapper Mobile End */}
    </Box>
  )
}

export default NewProjectMobileModal

