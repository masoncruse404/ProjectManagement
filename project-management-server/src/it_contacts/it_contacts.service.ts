// src/it_contacts/it_contacts.service.ts - IT contacts service

// nestjs
import { Injectable } from '@nestjs/common';

// repository
import { ITContactsRepository } from './repository/it_contacts.repository';

@Injectable()
export class ITContactsService {
  constructor(
    private iTContactsRepository: ITContactsRepository,
  ) {}

  async getClients(): Promise<string> {

    try {
      let sql_str = `SELECT "IT_Contact_ID", "IT_Contact_Name" 
                     FROM it_contacts`;
       
      const result = await this.iTContactsRepository.query(sql_str);

      return result;
      
    } catch (error) {
      throw error;
    }
  }
}
