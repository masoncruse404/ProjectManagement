// - \src\app\_components\ProjectView\ProjectViewBody\ProjectViewUploadsFileItem\ProjectViewUploadsFileItem - Project View Body Uploaded File Component

// COMPONENTS
import parseFilePath from "@/utils/parseFilePath"
import CustomizedMenusFile from "./menu/UploadedFileMenu";

// STYLES
import "@/styles/containers.css";
import "@/styles/utils.css";
import "./project-view-uploads-file-item.css";

// INTERFACES
import { ProjectViewFileItemProps } from "./Interface/ProjectViewFileItemProps";

import getBaseURL from "@/utils/getBaseURL";
import { getCookie } from "cookies-next";
import { Box, Typography, styled } from "@mui/material";

const ProjectViewUploadsFileItem: React.FC<ProjectViewFileItemProps> = ({ index, file }) => {

  const handleClickDownload = () => {
    const token = getCookie("accessToken");
    const url =`${getBaseURL()}/v1/files/download/${file.File_Name}` 
    const origin = process.env.NEXT_PUBLIC_ENV_ORIGIN || "http://project-management.masoncruse.com"

    fetch(url, {
      method: 'OPTIONS',
      headers: {
        'Origin': `${origin}`, 
        'Access-Control-Request-Method': 'GET',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Preflight request failed with status ${response.status}`);
      }
    })
  
      return fetch(url, { headers: {
        "Authorization": `Bearer ${token}`,
        'Origin': `${origin}`, 
      } })
    .then(res => res.blob())
    .then(res => {
      const aElement = document.createElement("a");

      aElement.setAttribute("download", file.File_Name);
      const href = URL.createObjectURL(res);
      aElement.href = href;
      aElement.setAttribute("target", "_blank");
      aElement.click();
      URL.revokeObjectURL(href);
    });

  }

  const FileLink = styled(Typography)(() => ({
    cursor: "pointer",
    "&:hover": {
      color: "#1565c0"
    }
  }));

  return (
    <Box 
      key={index}
      sx={{border:"1px solid rgba(0,0,0,.29)",  
           background:"rgba(0, 0, 0,.05)", 
           borderRadius: "5px", 
           display:"flex", 
           justifyContent:"space-between", 
           padding:"5px 10px", 
           marginBottom:"10px"
           }}
      >
      <Box
        display="flex"
        alignItems="center"
      >
        <FileLink variant="caption" onClick={handleClickDownload} >
          {parseFilePath(file.File_Name)}
        </FileLink>
      </Box>
      <CustomizedMenusFile ProjectFile_ID={file.ProjectFile_ID}/>
    </Box>
  );
};

export default ProjectViewUploadsFileItem
