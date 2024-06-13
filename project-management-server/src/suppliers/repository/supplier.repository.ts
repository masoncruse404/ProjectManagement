// src/suppliers/repository/supplier.repository.ts - Supplier repository

// typeorm
import { Repository } from "typeorm";

// entity
import { SuppliersEntity } from "../entity/suppliers.entity";

export class SuppliersRepository extends Repository<SuppliersEntity> {}
