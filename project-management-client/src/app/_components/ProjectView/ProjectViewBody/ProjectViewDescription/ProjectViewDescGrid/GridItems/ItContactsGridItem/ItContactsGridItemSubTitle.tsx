// - //src/app/_components/ProjectView/ProjectViewDescription/ProjectViewDescriptionGrid/GridItems/ItContactsGridItem/ItContactsGridItem.tsx - IT Contact grid subtitle component

import React from 'react'
import { IT_CONTACT_MAP } from '@/lib/types/ItContactType'

function ItContactsGridItemSubTitle({ subtitle } : { subtitle : number}) {
    function formatSubtitle2(){
        const subtitle2_str = String(subtitle)
        if(subtitle2_str.includes(",")){
          const containsComma = String(subtitle2_str).split(",")
          return <div className="d-flex flex-direction-column">
                        {containsComma.map((item,index) => {
                            return <div key={index} className="ml-0">{IT_CONTACT_MAP.get(Number(item))}</div>
                        }  
                        )}
                 </div>
        }
        else {
          return <div className="ml-0">{IT_CONTACT_MAP.get(Number(subtitle))}</div>
        }
       
      }
  return (
    <>
    {formatSubtitle2()}
    </>
  )
}

export default ItContactsGridItemSubTitle