
// - \src\app\_providers\ModalProviders\ModalProviders.tsx - Modals Providers

// REACT
import React from "react";

// CONTEXT
import { useNewProjectTabletContext } from "@/app/_contexts/NewProjectTabletContextProviders/NewProjectTabletContextProviders";
import { useNewProjectMobileContext } from "@/app/_contexts/NewProjectMobileContextProviders/NewProjectMobileContextProviders";
import { useNewProjectDesktopContext } from "@/app/_contexts/NewProjectDesktopContextProviders/NewProjectDesktopContextProviders";
import { useEditProjectTabletContext } from "@/app/_contexts/EditProjectTabletContextProviders/EditProjectTabletContextProviders";
import { useEditProjectMobileContext } from "@/app/_contexts/EditProjectMobileContextProviders/EditProjectMobileContextProviders";
import { useEditDesktopProjectContext } from "@/app/_contexts/EditProjectDesktopContextProviders/EditProjectDesktopContextProviders";
import { useNewProjectModalStatusContext} from "@/app/_contexts/NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders"
import { useEditProjectModalStatusContext } from "@/app/_contexts/EditProjectModalContextProviders/EditProjectModalStatusContextProviders";

// UTILS
import useScreenSize from "@/utils/useScreenSize";

// MODALS
import NewProjectDesktopModal from "../../_modals/Projects/NewProject/Desktop/NewProjectDesktop";
import NewProjectTabletModal from "../../_modals/Projects/NewProject/Tablet/NewProjectTablet";
import NewProjectMobileModal from "../../_modals/Projects/NewProject/Mobile/NewProjectMobileModal";
import EditProjectDesktopModal from "../../_modals/Projects/EditProject/Desktop/EditProjectDesktop";
import EditProjectTabletModal from "../../_modals/Projects/EditProject/Tablet/EditProjectTablet";
import EditProjectMobileModal from "../../_modals/Projects/EditProject/Mobile/EditProjectMobile";

const ModalsProvider: React.FC = () => {
  const new_project_modal_state_context = useNewProjectModalStatusContext()
  const new_project_desktop_state_context = useNewProjectDesktopContext()
  const new_project_tablet_state_context = useNewProjectTabletContext()
  const new_project_mobile_state_context = useNewProjectMobileContext()
  const edit_project_modal_status_context = useEditProjectModalStatusContext()
  const edit_project_desktop_state_context = useEditDesktopProjectContext()
  const edit_project_tablet_state_context = useEditProjectTabletContext()
  const edit_project_mobile_state_context = useEditProjectMobileContext()

  const screenSize = useScreenSize()

  function screenSizeModal(width: number): string {
    if (width >= 1200) {
      return "Desktop";
    }

    if (width <= 1200 && width > 700) {
      return "Tablet";
    }

    if (width <= 700) {
      return "Phone";
    }

    return "";
  }

  React.useEffect(() => {
    if(!screenSize) return;
    const modal_switch = screenSizeModal(screenSize.width);

    switch (modal_switch) {
      case "Desktop":
        new_project_desktop_state_context.updateValue(true)
        edit_project_desktop_state_context.updateValue(true)
        new_project_tablet_state_context.updateValue(false)
        new_project_mobile_state_context.updateValue(false)
        edit_project_mobile_state_context.updateValue(false)
        edit_project_tablet_state_context.updateValue(false)
        break;

      case "Tablet":
        new_project_tablet_state_context.updateValue(true)
        edit_project_tablet_state_context.updateValue(true)
        edit_project_desktop_state_context.updateValue(false)
        new_project_desktop_state_context.updateValue(false)
        new_project_mobile_state_context.updateValue(false)
        edit_project_mobile_state_context.updateValue(false)
        break;

      case "Phone":
        new_project_mobile_state_context.updateValue(true)
        edit_project_mobile_state_context.updateValue(true)
        edit_project_desktop_state_context.updateValue(false)
        edit_project_tablet_state_context.updateValue(false)
        new_project_desktop_state_context.updateValue(false)
        new_project_tablet_state_context.updateValue(false)
        break;
    }
  }, [screenSize, new_project_desktop_state_context.value, new_project_mobile_state_context.value, new_project_tablet_state_context.value]);

  return (
    <>
      {new_project_modal_state_context.value && new_project_desktop_state_context.value  ? (
        <NewProjectDesktopModal/>
      ) : null}
     
      {new_project_modal_state_context.value && new_project_tablet_state_context.value  ? (
      <NewProjectTabletModal/>
      ) : null}
      
      {new_project_modal_state_context.value && new_project_mobile_state_context.value  ? (
        <NewProjectMobileModal/>
      ) : null}

      {edit_project_modal_status_context.value && edit_project_desktop_state_context.value  ? (
        <EditProjectDesktopModal />
      ) : null}
     
      {edit_project_modal_status_context.value && edit_project_tablet_state_context.value  ? (
      <EditProjectTabletModal />
      ) : null}
      
      {edit_project_modal_status_context.value && edit_project_mobile_state_context.value  ? (
        <EditProjectMobileModal />
      ) : null}
  
    </>
  );
};

export default ModalsProvider
