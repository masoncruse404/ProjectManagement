// src/client/client.controller.ts - client controller

// nestjs
import { Controller, Get, HttpCode } from "@nestjs/common";

// service
import { ClientService } from "./client.service";

@Controller("v1/client")
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  
  @Get("/")
  @HttpCode(200)
  async getClients(): Promise<{ data: string }> {
    try {
      const clients = await this.clientService.getClients();

      if (clients !== undefined) {
        return { data: clients };
      }

    } catch (error) {
      // Handle errors appropriately
      console.error(error);
      throw error;
    }
  }

}
