// - \src\app\_components\ProjectView\ProjectViewBody\ProjectViewBody - Project View Body Container

// COMPONENTS
import ProjectViewDescription from "./ProjectViewDescription/ProjectViewDescription"
import ProjectViewNotesList from "./ProjectViewNotesNestedList/ProjectViewNotesList"
import ProjectViewFileUploadContainer from "./ProjectViewUploadContainer/ProjectViewUploadContainer"
import ProjectViewTable from "./ProjectViewTable/ProjectViewTable"

// CONTEXTS
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders"

const ProjectViewBody:React.FC = () => {
 const selected_project_context = useSelectedProjectContext()


 return(<>
        {selected_project_context.value?.Project_ID && selected_project_context.value?.Project_ID > 0  ? 
           <>
                <ProjectViewTable  />
                <ProjectViewDescription />
                <ProjectViewNotesList />
                <ProjectViewFileUploadContainer />
           </>
        : null} 
      </>)   
}

export default ProjectViewBody