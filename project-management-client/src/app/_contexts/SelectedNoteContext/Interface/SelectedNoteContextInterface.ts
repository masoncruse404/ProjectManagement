// - \src\app\_contexts\SelectedNoteContext\Interface\SelectedNoteContextInterface.ts - Selected Note Context Interface

// REACT
import { ReactNode } from "react"

export interface NoteInterface{
    Project_Notes_ID: number
    Notes: string
    Notes_DateCreated: string
} 
  
export interface SelectedNoteContextProps {
    value: NoteInterface | null
    updateValue: (newValue: NoteInterface | null) => void
}
  
export interface SelectedNoteContextProviderProps {
    children: ReactNode
}