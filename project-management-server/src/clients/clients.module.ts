// src\clients\clients.module.ts - Clients module

// nestjs
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// service
import { ClientsService } from "./clients.service";

// controller
import { ClientsController } from "./clients.controller";

// entity
import { ClientsEntity } from "./entity/clients.entity";

// repository
import { ClientsRepository } from "./repository/clients.repository";

@Module({
  imports: [TypeOrmModule.forFeature([ClientsEntity, ClientsRepository]),],
  providers: [ClientsService],
  controllers: [ClientsController]
})
export class ClientsModule {}
