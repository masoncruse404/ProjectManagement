// src/suppliers/entity/suppliers.entity.ts - Supplier entity

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class SuppliersEntity {

      @PrimaryGeneratedColumn()
      Supplier_ID: number;
      
      @Column()
      Supplier_Company: string;

      @Column({ nullable: true })
      Supplier_Directory: string;

      @Column({ nullable: true })
      Supplier_Status: string;

      @Column({ nullable: true })
      Supplier_Code: number;

      @Column({ nullable: true })
      Supplier_Test_URL: string;

      @Column({ nullable: true })
      Supplier_Prod_URL: string;

      @Column({ nullable: true })
      Supplier_From_ID: number;

      @Column({ nullable: true })
      Supplier_To_ID: number;

      @Column({ nullable: true })
      Supplier_Sender_ID: number;

      @Column({ nullable: true })
      Supplier_Sender_Secret: number;

      @Column({ nullable: true })
      Supplier_Production_Status: number;

      @Column({ nullable: true })
      Supplier_Logo: string;

      @Column({ nullable: true })
      Supplier_Logo_URL: string;

      @Column({ nullable: true })
      Supplier_Order: string;

      @Column({ nullable: true })
      Supplier_Address: string;

      @Column({ nullable: true })
      Supplier_City: string;

      @Column({ nullable: true })
      Supplier_State: string;

      @Column({ nullable: true })
      Supplier_PostalCode: string;

      @Column({ nullable: true })
      Supplier_Country: string;

      @Column({ nullable: true })
      Supplier_Phone: string;

      @Column({ nullable: true })
      Supplier_Email: string;

      @Column({ nullable: true })
      Test_URL: string;

      @Column({ nullable: true })
      Prod_URL: string;

}
