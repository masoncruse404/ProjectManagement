// - \src\app\_components\Sidebar\Desktop\ProjectList\ProjectList.tsx - Sidebar Project List container

// REACT
import * as React from "react";

// MUI
import { Box } from "@mui/material";

// COMPONENTS
import ProjectListItem from "./ProjectListItem/ProjectListItem";

// STYLES
import "./project-list.css"

// INTERFACE
import { ProjectListProps, ProjectItemProps } from "./Interface/ProjectListInterface";

export default function ProjectList({ item }: ProjectListProps) {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState<number>(-1)
  const [projectIdArr, setProjectIdArr] = React.useState<string[]>([])

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number, project: ProjectItemProps) => {
    event.preventDefault()
    setSelectedItemIndex(index)
  };

  React.useEffect(() => {
    const outputArray = item.project_ids?.split(",")
    setProjectIdArr(outputArray)
  }, [item])

  React.useEffect(() => {}, [projectIdArr]);

  return (
    <Box
      sx={{ bgcolor: "background.paper", padding:0, borderBottom:0 }}
      aria-labelledby="nested-list-subheader"
      className="project-list-wrap"
    >
      {/* Project List Container Start */}
      {projectIdArr && projectIdArr?.map((project_id, project_index) => {
        return (
          <ProjectListItem
            key={project_index}
            project_id={project_id}
            project_index={project_index}
            selectedItemIndex={selectedItemIndex}
            handleListItemClick={handleListItemClick}
          />
        );
      })}
      {/* Project List Container End */}
    </Box>
  );
}
