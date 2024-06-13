// src/it_contacts/it_contacts.repository.ts - IT contacts repository

// repository
import { Repository } from "typeorm";

// entity
import { ITContacts } from "../entity/it_contacts.entity";

export class ITContactsRepository extends Repository<ITContacts> {}
