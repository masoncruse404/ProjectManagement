// - /src/app/_components/Sidebar/Desktop/SidebarDesktop - Sidebar Desktop container
"use client" 

 // REACT
 import { useEffect, useState } from "react";

 // nextjs
 import { deleteCookie } from 'cookies-next';

 // THEME
import theme from "@/theme";

 // MUI
 import Divider from "@mui/material/Divider";
 import Drawer from "@mui/material/Drawer";
 import { ArrowBackIosNew } from "@mui/icons-material";
 import { ArrowForwardIos } from "@mui/icons-material";
 import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
 import { Stack } from "@mui/material";
 
 // CONTEXT
 import { useSidebarContext } from "@/app/_contexts/SidebarContextProviders/SidebarContextProviders";
 
 // HOOKS
 import InfiniteScrollContainer from "@/app/_hooks/InfiniteScroll/InfiniteScroll";

 // STYLES
 import "./SidebarDesktop.css"

 const LINKS = [
  { text: "arrow backward", href: "#", icon: <ArrowBackIosNew/>},
  { text: "arrow forward", href: '#', icon: <ArrowForwardIos/>},
  { text: "Logout", href: '#', icon: <PowerSettingsNewIcon/>},
 ];

 const SidebarDesktop: React.FC = () => {
  const [width, setWidth] = useState<number>(300)
  const sidebar_context = useSidebarContext()


  useEffect(() => {}, [sidebar_context.value])

  const handleMouseEventLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    sidebar_context.updateValue(false)
    setWidth(80)
  };

  const handleMouseEventOver = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    sidebar_context.updateValue(true)
    setWidth(300)
  };


  const handleLogout = () => {
    deleteCookie("accessToken",  { path : "/",})
    window.location.assign("/login")
  }


  return(
      <Drawer
      sx={{
        width: `${width}px`,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          zIndex:9,
          width: `${width}px`,
          boxSizing: 'border-box',
          height: 'auto',
          bottom: 0,
          transition: theme.transitions.create(['width'], {
            easing:  'cubic-bezier(0.0, 0, 0.2, 1)',
            duration: 295,
          }),
        },
      }}
        variant="permanent"
        anchor="left"
        onMouseOver={handleMouseEventOver}
        onMouseLeave={handleMouseEventLeave}
        className="sidebar-desktop-animation"
      >
      <InfiniteScrollContainer/> 
      <Divider sx={{ mt : "auto" }} />
      <Stack 
        onClick={handleLogout}
        id="sidebar-options"
        direction="row"
        sx={{padding:"5px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }}>
        {LINKS[2].icon}
      </Stack>
      <Divider />
      <Stack 
        id="sidebar-options"
        direction="row"
        sx={{padding:"5px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }}>
        {sidebar_context.value ? LINKS[0].icon : LINKS[1].icon}
      </Stack>
    </Drawer>
  )

}

export default SidebarDesktop