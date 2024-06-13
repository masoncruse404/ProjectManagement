// src/app/_components/ProjectView/ProjectViewDescription/ProjectViewDescriptionGrid/GridItems/ContactsGridItem/COntactsGridItemSubTitle.tsx - Contact grid subtitle component

import React from 'react'

function ContactsGridItemSubTitle({ subtitle } : { subtitle : number | string | Date | undefined }) {

function formatSubtitle(){
    if (typeof subtitle === "undefined"){
        return ""
    }
    return subtitle
    }
     
  return (
    <p  dangerouslySetInnerHTML={{__html: formatSubtitle()}} ></p>
  )
}

export default ContactsGridItemSubTitle