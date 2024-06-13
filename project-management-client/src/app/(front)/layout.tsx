// - \src\app\(front)\layout.tsx - frontend layout

// THEME
import theme from "@/theme";

// MUI 
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// CONTEXT PROVIDER 
import  ContextProvider from "@/app/_contexts/ContextProviders/ContextProviders";

export const metadata = {
  title: 'Project Management',
  description: 'Project Management Home',
}
  
export default function FrontLayout({
    children,
  }: {
    children: React.ReactNode;
  }){
    return <>
              <ThemeProvider theme={theme}>
              <CssBaseline />
              <ContextProvider>
                {children}
              </ContextProvider>
              </ThemeProvider >
           </>
}
  