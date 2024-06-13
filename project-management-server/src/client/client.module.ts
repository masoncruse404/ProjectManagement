// src/client/client.module.ts - client module

// nestjs
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

// entity
import { ClientEntity } from "./entity/client.entity";

// service
import { ClientService } from "./client.service";

// repository
import { ClientRepository } from "./repository/client.repository";

// controller
import { ClientController } from "./client.controller";

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity, 
                                      ClientRepository]), 
                                      ConfigModule],
  providers: [ClientService],
  controllers: [ClientController]
})
export class ClientModule {}
