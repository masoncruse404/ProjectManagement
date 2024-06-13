// - \src\app\_contexts\NewNoteContext\Interface\NewNoteContextInterface.ts - New Note Context Interface

// REACT
import { ReactNode } from "react";

export interface NewNoteContextProps {
    value: boolean
    updateValue: (newValue: boolean) => void
}
  
export interface NewNoteProps{
    children: ReactNode 
}
  