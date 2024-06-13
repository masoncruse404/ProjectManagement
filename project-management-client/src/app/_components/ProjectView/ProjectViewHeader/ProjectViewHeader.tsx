// - \src\app\_components\ProjectView\ProjectViewHeader\ProjectViewHeader - Project View Header Container

// MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NavButtons from "./NavButtons/NavButtons";

export default function ProjectViewHeader() {
  return (
    <Box 
      sx={{ 
      marginBottom: 1,
      padding: "8.5px",
      '@media (max-width: 780px)': {
        padding: "7px",
      },
      '@media (max-width: 580px)': {
        padding: "7.33px",
      },
      borderBottom: "1px solid #cdcdcd",
      }} 
    >
      <Grid container spacing={2} >
        <Grid item xs={8}></Grid>
        <Grid 
          item xs={4} 
          sx={{
            display:"flex",
            justifyContent:"flex-end"
          }}
        >
          <NavButtons />
        </Grid>
      </Grid>
    </Box>
  );
}