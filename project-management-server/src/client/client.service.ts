// src/client/client.service.ts - client service

// nestjs
import { Injectable } from "@nestjs/common";

// repository
import { ClientRepository } from "./repository/client.repository";

@Injectable()
export class ClientService {
  constructor(
    private clientRepository: ClientRepository,
  ) {}

  async getClients(): Promise<string> {

    try {
      let sql_str = `SELECT "Client_ID", "Client_Name" 
                     FROM client_entity 
                     ORDER BY "Client_Name";`
       
      const result = await this.clientRepository.query(sql_str);

      if ( result !== undefined ) {
        return result;
      }
      
    } catch (error) {
      throw error;
    }
  }



}
