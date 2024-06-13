"use client";
// - \src\app\_contexts\ContextProviders - Context Providers

// REACT
import React, { createContext, useContext, useState } from "react";

// CONTEXT PROVIDERS
import SelectedIndexContextProvider from "../SelectedIndexProviders/SelectedIndexProviders";
import LastSelectedIndexContextProvider from "../LastSelectedContextProviders/LastSelectedContextProviders";
import SelectedProjectContextProvider from "../SelectedProjectProviders/SelectedProjectProviders";
import SidebarContextProvider from "../SidebarContextProviders/SidebarContextProviders";
import ProjectDescriptionContextProvider from "../ProjectDescriptionContextProviders/ProjectDescriptionContextProviders";
import ProjectNameContextProvider from "../ProjectNameContextProviders/ProjectNameContextProviders";
import ActualTimeHoursContextProvider from "../ActualHoursContextProviders/ActualHoursContextProviders";
import ItContactsContextProvider from "../ItContactsComponentProviders/ItContactsComponentProviders";
import ClientContactsContextProvider from "../ClientContactsComponentProviders/ClientContactsContextProviders";
import CostPerHourContextProvider from "../CostPerHourComponent/CostPerHourComponent";
import EndDateContextProvider from "../EndDateContextProviders/EndDateContextProviders";
import ErpTypeContextProvider from "../ErpTypeContextProviders/ErpTypeContextProviders";
import ErpContactsContextProvider from "../ErpContactsContextProviders/ErpContactsContextProviders";
import EstimatedHoursContextProviders from "../EstimatedHoursContextProviders/EstimatedHoursContextProviders";
import PercentageCompleteContextProviders from "../PercentageCompleteContextProviders/PercentageCompleteContextProviders";
import ProjectTypeContextProviders from "../ProjectTypeContextProviders/ProjectTypeContextProviders";
import ProjectStatusContextProviders from "../ProjectStatusContextProviders/ProjectStatusContextProviders";
import SelectClientContextProviders from "../SelectClientContextProviders/SelectClientContextProviders";
import StartDateContextProviders from "../StartDateContextProviders/StartDateContextProviders";
import SupplierCompanyContextProviders from "../SupplierContextProviders/SupplierContextProviders";
import NewProjectContextProvider from "../NewProjectDesktopContextProviders/NewProjectDesktopContextProviders";
import TotalCostContextProvider from "../TotalCostContextProviders/TotalCostContextProviders";
import RenderContextProvider from "../RenderContextProviders/RenderContextProviders";
import NewNoteContextProvider from "../NewNoteContext/NewNoteContext";
import SupplierContactsProviders from "../SupplierContactsContextProviders/SupplierContactsContextProviders";
import SelectedNoteContextProvider from "../SelectedNoteContext/SelectedNoteContext";
import NewProjectDesktopContextProvider from "../NewProjectDesktopContextProviders/NewProjectDesktopContextProviders";
import NewProjectTabletContextProvider from "../NewProjectTabletContextProviders/NewProjectTabletContextProviders";
import NewProjectStatusContextProvider from "../NewProjectStatusContextProviders/NewProjectStatusContextProviders";
import NewProjectMobileContextProvider from "../NewProjectMobileContextProviders/NewProjectMobileContextProviders";
import NewProjectModalStatusContextProviders from "../NewProjectModalStatusContextProviders/NewProjectModalStatusContextProviders";
import EditProjectModalStatusContextProviders from "../EditProjectModalContextProviders/EditProjectModalStatusContextProviders";
import EditProjectDesktopContextProvider from "../EditProjectDesktopContextProviders/EditProjectDesktopContextProviders";
import EditProjectTabletContextProvider from "../EditProjectTabletContextProviders/EditProjectTabletContextProviders";
import EditProjectMobileContextProvider from "../EditProjectMobileContextProviders/EditProjectMobileContextProviders";

// INTERFACES
import { ContextProps, ContextProviderProps } from "./Interface/ContextInterface";

const Context = createContext<ContextProps | undefined>(undefined)
const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [value, setValue] = useState<string>("")
  const updateValue = (newValue: string) => { setValue(newValue) }

  return (
    <Context.Provider value={{ value, updateValue }}>
      <SelectedIndexContextProvider>
        <LastSelectedIndexContextProvider>
          <SelectedProjectContextProvider>
            <SidebarContextProvider>
                  <ProjectNameContextProvider>
                    <ProjectDescriptionContextProvider>
                      <ActualTimeHoursContextProvider>
                        <ItContactsContextProvider>
                          <ClientContactsContextProvider>
                            <CostPerHourContextProvider>
                              <EndDateContextProvider>
                                <ErpTypeContextProvider>
                                  <ErpContactsContextProvider>
                                    <EstimatedHoursContextProviders>
                                      <PercentageCompleteContextProviders>
                                        <ProjectTypeContextProviders>
                                          <ProjectStatusContextProviders>
                                            <SelectClientContextProviders>
                                              <StartDateContextProviders>
                                                  <SupplierCompanyContextProviders>
                                                    <NewProjectContextProvider>
                                                      <TotalCostContextProvider>
                                                        <RenderContextProvider>
                                                          <SupplierCompanyContextProviders>
                                                            <NewNoteContextProvider>
                                                              <SupplierContactsProviders>
                                                                <SelectedNoteContextProvider>
                                                                    <NewProjectDesktopContextProvider>
                                                                      <NewProjectTabletContextProvider>
                                                                        <NewProjectStatusContextProvider>
                                                                          <NewProjectMobileContextProvider>
                                                                            <NewProjectModalStatusContextProviders>
                                                                              <EditProjectModalStatusContextProviders>
                                                                                <EditProjectDesktopContextProvider>
                                                                                  <EditProjectTabletContextProvider>
                                                                                    <EditProjectMobileContextProvider>
                                                                                      {children}
                                                                                    </EditProjectMobileContextProvider>
                                                                                  </EditProjectTabletContextProvider>
                                                                                </EditProjectDesktopContextProvider>
                                                                              </EditProjectModalStatusContextProviders>
                                                                            </NewProjectModalStatusContextProviders>
                                                                          </NewProjectMobileContextProvider>
                                                                        </NewProjectStatusContextProvider>
                                                                      </NewProjectTabletContextProvider>
                                                                    </NewProjectDesktopContextProvider>
                                                                </SelectedNoteContextProvider>
                                                              </SupplierContactsProviders>
                                                            </NewNoteContextProvider>
                                                          </SupplierCompanyContextProviders>
                                                        </RenderContextProvider>
                                                      </TotalCostContextProvider>
                                                    </NewProjectContextProvider>
                                                  </SupplierCompanyContextProviders>
                                              </StartDateContextProviders>
                                            </SelectClientContextProviders>
                                          </ProjectStatusContextProviders>
                                        </ProjectTypeContextProviders>
                                      </PercentageCompleteContextProviders>
                                    </EstimatedHoursContextProviders>
                                  </ErpContactsContextProvider>
                                </ErpTypeContextProvider>
                              </EndDateContextProvider>
                            </CostPerHourContextProvider>
                          </ClientContactsContextProvider>
                        </ItContactsContextProvider>
                      </ActualTimeHoursContextProvider>
                    </ProjectDescriptionContextProvider>
                  </ProjectNameContextProvider>
            </SidebarContextProvider>
          </SelectedProjectContextProvider>
        </LastSelectedIndexContextProvider>
      </SelectedIndexContextProvider>
    </Context.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error("useMyContext must be used within a ContextProvider");
  }
  return context;
};

export default ContextProvider;
