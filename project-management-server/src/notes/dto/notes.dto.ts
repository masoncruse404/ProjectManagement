// - /src/notes/dto/notes.dto.ts - Notes Data Transfer Object

export class NotesDTO {
    Project_Notes_ID: Number;
    Project_ID: Number;
    Notes: String;
    Admin_ID: Number;
    Notes_DateCreated: Date;
    Notes_Importance: Number;
    Notes_Editor: Number;
}