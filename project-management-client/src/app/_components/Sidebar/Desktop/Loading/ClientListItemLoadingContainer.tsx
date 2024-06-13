// - /src/app/_components/Sidebar/Desktop/Loading/ClientListItemLoadingContainer - Sidebar Client List Item Loading Container

// react
import React from 'react'

// components
import ClientListItemLoading from './ClientListItemLoading'

// styles
import "@/styles/utils.css"

function ClientListItemLoadingContainer() {
  return (
    <>
        <div className="mt-5">
            <ClientListItemLoading />
        </div>
        <ClientListItemLoading /> 
        <ClientListItemLoading /> 
    </>
  )
}

export default ClientListItemLoadingContainer