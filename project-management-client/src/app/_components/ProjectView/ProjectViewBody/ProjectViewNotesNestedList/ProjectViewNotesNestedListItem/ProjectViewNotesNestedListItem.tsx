// - /notes/src/components/project_view/project_view_file_item - Project view note component

// REACT
import { useEffect } from "react";

// STYLES
import "@/styles/utils.css";

// INTERFACES
import { ProjectViewNestedListItemNoteProps } from "./Interface/ProjectNoteInterface";
import { ProjectViewNotesEdit } from "../ProjectViewNotesEdit";

const ProjectViewNestedListItemNote: React.FC<ProjectViewNestedListItemNoteProps> = ({ note }) => {

  useEffect(() => {}, [note])

  return <ProjectViewNotesEdit note={note}/>
   
}

export default ProjectViewNestedListItemNote
