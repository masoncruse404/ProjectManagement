// src/clients/clients.controller.ts - Clients Controller

// nestjs
import { Controller, Get } from "@nestjs/common";

// service
import { ClientsService } from "./clients.service";

@Controller("v1/clients")
export class ClientsController {
  constructor(private readonly clientService: ClientsService) {}

  @Get("/")
  async getClients(): Promise<{ data: string }> {
    try {
        const clients = await this.clientService.getClients();
        return { data: clients };
    } catch (error) {
        console.error(error);
        throw error;
    }
  }
}
  