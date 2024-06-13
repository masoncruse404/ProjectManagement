// - //src/app/_components/ProjectView/ProjectViewBody/ProjectViewDescription/ProjectViewDescGrid/ContactsGridItem - Contacts Grid Item

// react
import React from 'react'

// mui
import { Box, Typography } from '@mui/material'

// STYLES
import "@/styles/utils.css"
import ContactsGridItemSubTitle from './ContactsGridItemSubTitle'

const ContactsGridItem = ({icon, subtitle1, subtitle2 }: {icon : any, subtitle1: string, subtitle2: number | string | Date | undefined}) => {

 
  return (
   <Box
    sx={{display:"flex",
    flex:1,
    padding:"10px 0"
    }}
   >
    <Box 
        sx={{padding:"20px 20px", 
             display:"flex",
             justifyContent:"center",
             alignItems:"center" 
            }}
    >
        {icon}
    </Box>
    <Box 
        sx={{display:"flex", 
              justifyContent:"center",
              alignContent:"center", 
              flexDirection:"column",
              textOverflow: "ellipsis",
            }}>
        <Typography variant="subtitle2"
          sx={{fontSize:"16px", color:"#444"}}
        >
         {subtitle1}
        </Typography>
        <Typography variant="subtitle1"
          sx={{fontSize:"14px", 
               color:"rgba(0,0,0,.65)",
               fontStyle: "italic" ,
               wordWrap: "break-word"
              }}
        >
        <ContactsGridItemSubTitle subtitle={subtitle2} />
        </Typography>
    </Box>
   </Box>
  )
}

export default ContactsGridItem 