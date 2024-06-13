// src/erp_type/erp_type.controller.ts - Erp type controller


// nestjs
import { Controller, Get, HttpCode } from "@nestjs/common";

// service
import { ErpTypeService } from "./erp_type.service";

@Controller("v1/erp-types")
export class ErpTypeController {
  constructor(private readonly eRPTypeService: ErpTypeService) {}

  @Get("/")
  @HttpCode(200)
  async getErpTypes(): Promise<{ data: string }> {
    try {
      const erp_types = await this.eRPTypeService.getErpTypes();

      if (erp_types !== undefined) {
        // Value found in the database 
        return { data: erp_types };
      }

    } catch (error) {
      // Handle errors appropriately
      console.error(error);
      throw error;
    }
  }

 
}
