// - \src\app\_components\ProjectView\ProjectViewBody\ProjectViewDescription\ProjectViewDescGrid\ProjectViewDescGrid.tsx - Project view desc grid component

import React, { useState } from 'react'

// COMPONENT
import ProjectViewDescGridItem from './GridItems/ProjectViewDescGridItem/ProjectViewDescGridItem'
import ContactsGridItem from './GridItems/ContactsGridItem/ContactsGridItem';

// CONTEXT
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";

// STYLES
import "./project-view-desc-grid.css"
import "@/styles/utils.css"

// MUI
import { Grid, Skeleton } from '@mui/material'

// ICONS
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import HourglassTopOutlinedIcon from '@mui/icons-material/HourglassTopOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import AbcOutlinedIcon from '@mui/icons-material/AbcOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';

// UTILS
import parseDate from '@/utils/parseDate';
import axiosInstance from '@/axiosConfig';

// TYPES
import { PROJECT_TYPE_MAP } from '@/lib/types/ProjectTypeType';
import { PROJECT_STATUS_MAP } from '@/lib/types/ProjectStatusType';
import { ERP_TYPE_MAP } from '@/lib/types/ErpType';
import { SUPPLIER_COMPANY_MAP } from '@/lib/types/SupplierCompanyType';
import ItContactsGridItem from './GridItems/ItContactsGridItem/ItContactsGridItem';

const CURRENCY = "$"
const ProjectViewDescGrid = () => {
    const [clientName, setClientName] = useState<string>("")
    const selected_project_context = useSelectedProjectContext()

    React.useEffect(() => {
        if(!selected_project_context.value?.Project_ID) return
         
          axiosInstance.get(`/v1/projects/${selected_project_context.value?.Project_ID}/client`)
          .then((response: any) => {
            setClientName(response.data.data)
          })
      
    }, [selected_project_context.value])

  return (
    <Grid container sx={{ flexGrow: 1, width:"95%", marginRight:"10px", margin:"20px 20px", border:"1px solid #cdcdcd", borderRadius:"5px" }} columns={{  sm: 8, md: 12 }} className="overflow-hidden">

        <Grid item xs={2} sm={4} md={4} id="project_view_desc_client_name"className="grid-border grid-border-right-xl gird-border-right-md overflow-hidden">
            <ProjectViewDescGridItem
             icon={<AccountBoxOutlinedIcon sx={{ color : "#000" }}/>}
             subtitle1="Client Name"
             subtitle2={clientName ? clientName : <Skeleton/>}
            />
        </Grid>

        <Grid item xs={2} sm={4} md={4} className="grid-border grid-border-right-xl overflow-hidden">
            <ProjectViewDescGridItem
             icon={<CalendarMonthOutlinedIcon sx={{ color : "#000" }}/>}
             subtitle1="Start Date"
             subtitle2={selected_project_context.value?.Start_Date ? parseDate(selected_project_context.value?.Start_Date) : ""}
            />
        </Grid>

        <Grid item xs={2} sm={4} md={4} className="grid-border grid-border-right-md overflow-hidden">
            <ProjectViewDescGridItem
             icon={<EventAvailableOutlinedIcon sx={{ color : "#000" }}/>}
             subtitle1="End Date"
             subtitle2={selected_project_context.value?.End_Date ? parseDate(selected_project_context.value?.End_Date) : ""}
            />
        </Grid>

        <Grid item xs={2} sm={4} md={4} className="grid-border grid-border-right-xl overflow-hidden">
            <ProjectViewDescGridItem
             icon={<ViewListOutlinedIcon  sx={{ color : "#000" }}/>} 
             subtitle1="Project Type"
             subtitle2={selected_project_context.value?.Project_Type_ID ? PROJECT_TYPE_MAP.get(selected_project_context.value?.Project_Type_ID) : 0}
            />
        </Grid>
        
        <Grid item xs={2} sm={4} md={8} className="grid-border grid-border-right-md overflow-hidden">
            <ProjectViewDescGridItem
             icon={<BorderColorOutlinedIcon  sx={{ color : "#000" }}
             />} 
             subtitle1="Project Name" 
             subtitle2={selected_project_context.value?.Project_Name ? selected_project_context.value?.Project_Name : 0}
            />
        </Grid>

        <Grid item xs={2} sm={4} md={4} className="grid-border grid-border-right-xl overflow-hidden">
            <ProjectViewDescGridItem
             icon={<BuildOutlinedIcon  sx={{ color : "#000" }}/>}
             subtitle1="Project Status"
             subtitle2={selected_project_context.value?.Project_Status_ID ? PROJECT_STATUS_MAP.get(selected_project_context.value?.Project_Status_ID) : 0}
            />
        </Grid>

        <Grid item xs={2} sm={8} md={8} className="grid-border overflow-hidden">
            <ProjectViewDescGridItem
             icon={<DescriptionOutlinedIcon  sx={{ color : "#000" }}/>}
             subtitle1="Project Description"
             subtitle2={selected_project_context.value?.Project_Desc ? selected_project_context.value?.Project_Desc : 0}
            />
        </Grid>

        <Grid item xs={2} sm={8} md={4} id="project_view_desc_it_contacts" className="grid-border overflow-hidden">
            <ItContactsGridItem
             icon={<BadgeOutlinedIcon  sx={{ color : "#000" }}/>}
             subtitle1="IT Contacts"
             subtitle2={selected_project_context.value?.IT_Contact_ID? selected_project_context.value?.IT_Contact_ID: 0}
            />
        </Grid>

        <Grid item xs={2} sm={8} md={8} className="grid-border overflow-hidden">
            <ProjectViewDescGridItem
             icon={<PercentOutlinedIcon  sx={{ color : "#000" }}/>}
             subtitle1="Percentage Complete"
             subtitle2={selected_project_context.value?.Percentage_Complete ? `${selected_project_context.value?.Percentage_Complete}%` : 0}
            />
        </Grid>

        <Grid item xs={2} sm={4} md={4} id="project_view_desc_supplier_company" className="grid-border grid-border-right-xl overflow-hidden">
            <ProjectViewDescGridItem
             icon={<LocalShippingOutlinedIcon  sx={{ color : "#000" }}/>}
             subtitle1="Supplier Company"
             subtitle2={selected_project_context.value?.Supplier_ID ? SUPPLIER_COMPANY_MAP.get(selected_project_context.value?.Supplier_ID) : 0}
            />
        </Grid>

        <Grid item xs={2} sm={4} md={4} className="grid-border grid-border-right-xl overflow-hidden">
            <ProjectViewDescGridItem
             icon={<HourglassBottomOutlinedIcon  sx={{ color : "#000" }}
             />} subtitle1="Estimated
             Time Hours" subtitle2={selected_project_context.value?.Estimated_Time_Hours ? selected_project_context.value?.Estimated_Time_Hours : 0}
            />
        </Grid>
        
        <Grid item xs={2} sm={4} md={4} className="grid-border grid-border-right-md overflow-hidden">
            <ProjectViewDescGridItem
             icon={<HourglassTopOutlinedIcon  sx={{ color : "#000" }}
             />} subtitle1="Actual
             Time Hours" subtitle2={selected_project_context.value?.Actual_Time_Hours ? selected_project_context.value?.Actual_Time_Hours : 0}
            />
        </Grid>

        <Grid item xs={2} sm={4} md={4} className="grid-border grid-border-right-xl overflow-hidden">
            <ProjectViewDescGridItem
             icon={<AbcOutlinedIcon  sx={{ color : "#000" }}/>}
             subtitle1="ERP Type"
             subtitle2={selected_project_context.value?.ERP_Type_ID ? ERP_TYPE_MAP.get(selected_project_context.value?.ERP_Type_ID) : 0}
            />
        </Grid>
       
        <Grid item xs={2} sm={4} md={4} id="project_view_desc_cost_per_hour" className="grid-border grid-border-right-md overflow-hidden">
            <ProjectViewDescGridItem
             icon={<MonetizationOnOutlinedIcon  sx={{ color : "#000" }}/>}
             subtitle1="Cost Per Cost" subtitle2={selected_project_context.value?.Cost_Per_Hour ? `${CURRENCY}${selected_project_context.value?.Cost_Per_Hour}` : CURRENCY+"0"}
            />
        </Grid>

        <Grid item xs={2} sm={4} md={4} className="grid-border overflow-hidden">
            <ProjectViewDescGridItem
             icon={<RequestQuoteOutlinedIcon  sx={{ color : "#000" }}/>} subtitle1="Total
             Cost" subtitle2={selected_project_context.value?.Total_Cost ? `${CURRENCY}${selected_project_context.value?.Total_Cost}` : CURRENCY+"0"}
            />
        </Grid>

        <Grid item xs={2} sm={4} md={4} id="project_view_desc_supplier_contacts" className="grid-border grid-border-right-xl overflow-hidden">
            <ContactsGridItem
             icon={<EmailOutlinedIcon  sx={{ color : "#000" }}/>}
             subtitle1="Supplier Contacts"
             subtitle2={selected_project_context.value?.Supplier_Contacts ? selected_project_context.value?.Supplier_Contacts : ""}
            />
        </Grid>

        <Grid item xs={2} sm={4} md={4} id="project_view_desc_erp_contacts" className="grid-border overflow-hidden">
            <ContactsGridItem
             icon={<EmailOutlinedIcon  sx={{ color : "#000" }}/>}
             subtitle1="ERP Contacts"
             subtitle2={selected_project_context.value?.ERP_Contacts ? selected_project_context.value?.ERP_Contacts : ""}
            />
        </Grid>

        <Grid item xs={2} sm={8} md={4} id="project_view_desc_client_contacts">
            <ContactsGridItem
             icon={<EmailOutlinedIcon  sx={{ color : "#000" }}/>}
             subtitle1="Client Contacts"
             subtitle2={selected_project_context.value?.Client_Contacts ? selected_project_context.value?.Client_Contacts : ""}
            />
        </Grid>
    </Grid>
  )
}

export default ProjectViewDescGrid