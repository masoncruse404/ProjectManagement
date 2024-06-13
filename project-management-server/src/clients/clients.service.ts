// src\clients\clients.module.ts - Clients module

// nestjs
import { Injectable } from "@nestjs/common";

// repository
import { ClientsRepository } from "./repository/clients.repository";

@Injectable()
export class ClientsService {
  constructor( private clientsRepository: ClientsRepository ) {}

  async getClients(): Promise<string> {
   
    try {
      // If not in the cache, fetch from the database
      const sql_str = `
      SELECT
         client_entity."Client_ID",
         client_entity."Client_Name",
         string_agg(project_entity."Project_ID"::text, ',') AS Project_IDs
      FROM client_entity
      JOIN project_entity ON client_entity."Client_ID" = project_entity."Client_ID"
      GROUP BY client_entity."Client_ID"
    `;


      const result = await this.clientsRepository.query(sql_str);
   
      const clients = result || 0;

      return clients;
      
    } catch (error) {
      throw error;
    }
  }
}
