// src/app/(front)/ProjectDetails.tsx - Project details component 

// react
import React from 'react'

// components
import SidebarDesktop from '../_components/Sidebar/Desktop/SidebarDesktop'
import ProjectView from '../_components/ProjectView/ProjectView'

// modals provider
import ModalsProvider from '../_providers/ProjectModalProviders/ProjectModalProviders'

// cookies
import { getCookie } from 'cookies-next'

// nextjs
import { useRouter } from "next/navigation"

const ProjectDetails = () => {
  const router = useRouter()
  const token = getCookie("accessToken")

  React.useEffect(() => {
    if ( typeof token === "undefined"){
      return router.push("/login")
    }
  }, [token])
  
  return (
    <>
    <ModalsProvider />
    <SidebarDesktop/>
    <ProjectView />
    </>
  )
}

export default ProjectDetails