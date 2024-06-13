// src/erp_type/erp_type.module.ts - Erp type module 

// nestjs
import { Module } from "@nestjs/common";

// service
import { ErpTypeService } from "./erp_type.service";

// controller
import { ErpTypeController } from "./erp_type.controller";

// entity
import { ErpTypeEntity } from "./entity/erp_type.entity";

// repository 
import { ErpTypeRepository } from "./repository/erp_type.repository";

// nestjs
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
  imports: [TypeOrmModule.forFeature([ErpTypeEntity, 
                                      ErpTypeRepository]), 
                                      ConfigModule], 
  controllers: [ErpTypeController],
  providers: [ErpTypeService]
})
export class ErpTypeModule {}
