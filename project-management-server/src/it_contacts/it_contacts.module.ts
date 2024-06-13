// src/it_contacts/it_contacts.module.ts - IT contacts module

// nestjs
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// service
import { ITContactsService } from './it_contacts.service';

// controller
import { ITContactsController } from './it_contacts.controller';

// entity
import { ITContacts } from './entity/it_contacts.entity';

// repository
import { ITContactsRepository } from './repository/it_contacts.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ITContacts,
                                      ITContactsRepository]),
                                      ConfigModule], 
  providers: [ITContactsService],
  controllers: [ITContactsController]
})
export class ItContactsModule {}
