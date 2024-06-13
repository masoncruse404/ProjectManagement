// src/suppliers/suppliers.service.ts - Suppliers service

// nestjs
import { Injectable } from "@nestjs/common";

// repository
import { SuppliersRepository } from "./repository/supplier.repository";

@Injectable()
export class SuppliersService {
  constructor(
    private suppliersRepository: SuppliersRepository,
  ) {}

  async getSuppliers(): Promise<string> {

    try {
      let sql_str = `SELECT "Supplier_ID", "Supplier_Company"
                     FROM suppliers_entity
                     ORDER BY "Supplier_Company";`
       
      const result = await this.suppliersRepository.query(sql_str);

      if ( result !== undefined ){
        return result;
      }
      
    } catch (error) {
      throw error;
    }
  }

}
