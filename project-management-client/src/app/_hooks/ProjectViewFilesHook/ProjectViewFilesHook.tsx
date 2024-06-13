// - \src\app\_hooks\ProjectViewFileHook.tsx\ - Project View Files Hook

// REACT
import React, { useState, useEffect } from "react";

// AXIOS
import axiosInstance from "@/axiosConfig";

// Interface 
import { ProjectFileInterface } from "./Interface/ProjectFileInterface";

// CONTEXTS
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";
import { useRenderContext } from "@/app/_contexts/RenderContextProviders/RenderContextProviders";

// COMPONENTS
import ProjectViewUploadsFileItem from "@/app/_components/ProjectView/ProjectViewBody/ProjectViewUploadsFileItem/ProjectViewUploadsFileItem";

// STYLES
import "@/styles/utils.css"

function ProjectViewFilesHook() {
  const selected_project_context = useSelectedProjectContext()
  const render_context = useRenderContext()
  const [files, setFiles] = useState<ProjectFileInterface[]>([]) 
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    if (!selected_project_context.value?.Project_ID) return

    axiosInstance.get("/v1/files/" + String(selected_project_context.value?.Project_ID))
      .then(response => {
        const items = response.data.data
        const reversedItems = items.reverse()
        setFiles(reversedItems)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      });

  }, [selected_project_context.value, render_context.value])

  if (files) return (
    <div className="p-10">
    {files.map && files.map((file) => <ProjectViewUploadsFileItem key={file.ProjectFile_ID} index={file.ProjectFile_ID} file={file} />)}
    </div>
  )
}

export default ProjectViewFilesHook
