// - \src\app\_component\ProjectView\ProjectViewBody\ProjectViewUploadContainer\ProjectViewFileUpload - Project View File Upload Component
"use client"

// MUI
import { Button, Box } from "@mui/material";

// UTILS
import { useSelectedProjectContext } from "@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders";

// UTILS
import getBaseURL from "@/utils/getBaseURL";

// CONTEXT
import { useRenderContext } from "@/app/_contexts/RenderContextProviders/RenderContextProviders";
import { getCookie } from "cookies-next";
import toast from "react-hot-toast";


const ProjectViewFileUpload: React.FC = () => {
  const selected_project_context = useSelectedProjectContext()
  const render_context = useRenderContext()

  const uploadHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const uploaded_files = event.target.files
    if(!uploaded_files) return;
  
    const data = new FormData();
    const file = uploaded_files[0]
  
    const mimeTypes = ['application/json', 'image/jpeg', 'image/png', 'application/x-zip-compressed','application/pdf', "application/msword", "application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-excel","text/csv", "text/x-csv", "application/zip"]

    if (!mimeTypes.includes(file.type)){

      toast.error("Upload format not supported");
      return;
    }

    if (file.size / 1000000 > 100){
      toast.error("Upload exceeds limit");
      return;
    }
    data.set("file", file)
    data.append("Project_ID",String(selected_project_context.value?.Project_ID))

    const token = getCookie("accessToken");
    const serverUrl = `${getBaseURL()}/v1/files/upload`;

  // Step 1: Perform preflight request
  fetch(serverUrl, {
    method: 'OPTIONS',
    headers: {
      'Origin': 'http://project-management.masoncruse.com', 
      'Access-Control-Request-Method': 'POST',
      'Access-Control-Request-Headers': 'Content-Type',
    },
  })
  .then(response => {
    // Check if the preflight request was successful
    if (!response.ok) {
      console.log('preflight')
      throw new Error(`Preflight request failed with status ${response.status}`);
    }

    // Step 2: If preflight is successful, make the actual POST request
    return fetch(serverUrl, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Project_ID": `Project ID ${selected_project_context.value?.Project_ID}`,
        'Origin': 'http://project-management.masoncruse.com', 
      },
      body: data,
    });
  })
  .then(response => {
    console.log('response ',response)
    // Handle the response from the actual POST request
    if (response.ok) {
      return response.json();
    } else {
      console.log('error')
      throw new Error(`POST request failed with status ${response.status}`);
    }
  })
  .then(data => {
    // Process the data returned by the server
    if ( data.data.statusCode === 200) {
      render_context.updateValue(!render_context.value)
      toast.success("File uploaded")
    }
    else {
      throw new Error(`POST request failed`);
    }
  })
  .catch(error => {
    toast.error("Upload failed.")
    console.error('Error:', error.message);
  });

  };

  return (
    <Box p={1} 
         border="1px dashed #ccc" 
         borderRadius={3}
         textAlign="left"
         marginBottom="10px"
    >
      <form>
        <input 
          type="file"
          name="file" 
          onChange={uploadHandler} 
          style={{ display: "none" }} 
          id="file-input" 
        />
        <label htmlFor="file-input">
          <Button 
            variant="outlined" 
            component="span"
            fullWidth
          >
            Select Files
          </Button>
        </label>
      </form>
    </Box>
  );
};

export default ProjectViewFileUpload;

