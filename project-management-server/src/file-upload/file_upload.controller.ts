// src/file-upload/file-upload.controller.ts - File Upload Controller

// nestjs
import { Body, Controller, Post, Get, UploadedFile, UseInterceptors, Param, HttpCode, Res, HttpException, HttpStatus, Delete } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

// file stream
import { createReadStream } from 'fs';

// path
import { join } from 'path';

// express
import type { Response } from 'express';

// service
import { FileUploadService } from "./file_upload.service";

// dto
import { FileUploadDTO } from "./dto/file_upload.dto";
import { FileDeleteDTO } from "./dto/file_delete.dto";
import { FileDownloadDTO } from "./dto/file_download.dto";
import { diskStorage } from "multer";

const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const mimeTypes = ['application/json', 'image/jpeg', 'image/png', 'application/x-zip-compressed','application/pdf', "application/msword", "application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-excel","text/csv", "text/x-csv", "application/zip"]

    if (!mimeTypes.includes(file.mimetype)) return cb(new Error('Extension not allowed'), "");
    const Project_ID_Header = req.rawHeaders.find(header => header.includes("Project ID"))
    const Project_ID = Project_ID_Header.match(/(\d+)/);
    
    cb(null, `${Project_ID[0]}-${file.originalname}`);
  },
});


@Controller("v1/files")
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}
 
  @Post("upload")
  @HttpCode(201)
  @UseInterceptors(FileInterceptor('file', { storage }))
  async uploadFiles(@UploadedFile()  file : Express.Multer.File, @Body() body) : Promise<{ data : { message : string, filename : string, statusCode : number} }> {
    const mimeTypes = ['application/json', 'image/jpeg', 'image/png', 'application/x-zip-compressed','application/pdf']
    if (mimeTypes.includes(file.mimetype)){
      await this.fileUploadService.saveFileMetadata(file, body.Project_ID);
      return { data : {message: 'resource uploaded successfully', filename: file.filename, statusCode : 200} };
    } else {
      console.log('error')
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
 
  @Get("/:Project_ID")
  @HttpCode(200)
  async getProjectFileID(@Param() data: FileUploadDTO): Promise<{data : string}>{
    const project_file = await this.fileUploadService.listProjectFileID(data.Project_ID);
    return { data : project_file }
  }
  

  @Delete("/:ProjectFile_ID/delete")
  @HttpCode(200)
  async deleteFiles(@Param() ProjectFile_ID: FileDeleteDTO){ 
    await this.fileUploadService.deleteFile(ProjectFile_ID);
    return  { data : { message : "resource deleted successfully", statusCode : 200 } }
  }


  @Get("/download/:ProjectFile_Name")
  @HttpCode(200)
  async downloadFile(@Res() res: Response, @Param() Param: FileDownloadDTO){
    const file = await createReadStream(join(process.cwd(), '/uploads/' + Param.ProjectFile_Name));
    file.pipe(res);
  }

}


