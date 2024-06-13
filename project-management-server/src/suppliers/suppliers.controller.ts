// src/suppliers/suppliers.controller.ts - Suppliers controller

// nestjs
import { Controller, Get, HttpCode } from "@nestjs/common";

// service
import { SuppliersService } from "./suppliers.service";

@Controller("v1/suppliers")
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Get()
  @HttpCode(200)
  async getSuppliers(): Promise<{ data: string }> {
    try {
      const suppliers = await this.suppliersService.getSuppliers();

      if (suppliers !== undefined) {
        return { data: suppliers };
      }

    } catch (error) {
      // Handle errors appropriately
      console.error(error);
      throw error;
    }
  }

}
