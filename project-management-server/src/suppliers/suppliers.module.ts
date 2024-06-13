// src/suppliers/suppliers.module.ts - Supplier module 

// nestjs
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

// service
import { SuppliersService } from "./suppliers.service";

// controller
import { SuppliersController } from "./suppliers.controller";

// entity
import { SuppliersEntity } from "./entity/suppliers.entity";

// repository
import { SuppliersRepository } from "./repository/supplier.repository";

@Module({
  imports: [TypeOrmModule.forFeature([SuppliersEntity,
                                      SuppliersRepository]),
                                      ConfigModule], 
  providers: [SuppliersService],
  controllers: [SuppliersController]
})

export class SuppliersModule {}
