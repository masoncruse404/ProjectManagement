// src/erp_type/erp_type.service.ts - Erp type service 

// nestjs
import { Injectable } from "@nestjs/common";

// repository
import { ErpTypeRepository } from "./repository/erp_type.repository";

@Injectable()
export class ErpTypeService {
  constructor(
    private eRPTypeRepository: ErpTypeRepository,
  ) {}

  async getErpTypes(): Promise<string> {

    try {
      let sql_str = `SELECT "ERP_Type_ID", "ERP_Type" 
                     FROM erp_type_entity 
                     ORDER BY "ERP_Type"`;
       
      const result = await this.eRPTypeRepository.query(sql_str);
      return result;
      
    } catch (error) {
      throw error;
    }
  }


}
