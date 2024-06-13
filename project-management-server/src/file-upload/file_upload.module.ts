// src/file-upload/file-upload.module.ts - File Upload Module

// nestjs
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';

// controller
import { FileUploadController } from './file_upload.controller';

// service
import { FileUploadService } from './file_upload.service';

// entity
import { Project_File_Table } from './entity/file.entity';

// repository
import { FileUploadRepository } from './file_upload.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Project_File_Table,
                                      FileUploadRepository]),],
  
  controllers: [FileUploadController],
  providers: [FileUploadService]
})
export class FileUploadModule {}
