// src/erp_type/repository/erp_type.repository.ts - Erp type repository

// repository
import { Repository } from "typeorm";

// entity
import { ErpTypeEntity } from "../entity/erp_type.entity";

export class ErpTypeRepository extends Repository<ErpTypeEntity> {}
