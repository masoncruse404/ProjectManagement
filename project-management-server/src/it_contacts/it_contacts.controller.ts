// src/it_contacts/it_contacts.controller.ts - IT contacts controller

// nestjs
import { Controller, Get, HttpCode } from "@nestjs/common";

// service
import { ITContactsService } from "./it_contacts.service";

@Controller("v1/it-contacts")
export class ITContactsController {
  constructor(private readonly iTContactsService: ITContactsService) {}
  
  @Get("/")
  @HttpCode(200)
  async getClients(): Promise<{ data: string }> {
    try {
      const contacts = await this.iTContactsService.getClients();

      if (contacts !== undefined) {
        // Value found in the database 
        return { data: contacts };
      }

    } catch (error) {
      // Handle errors appropriately
      console.error(error);
      throw error;
    }
  }
}
