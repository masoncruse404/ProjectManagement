import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../app.module';
import { ProjectTypeService } from '../project_type.service';





describe('ProjectStatusModule', () => {
 let app: INestApplication;
 let service: ProjectTypeService
 
 const clientsService = {
   get: jest.fn(),
 };

 beforeEach(async () => {
   const moduleFixture: TestingModule = await Test.createTestingModule({
     imports: [AppModule],
   })
     .overrideProvider(service)
     .useValue(ProjectTypeService)
     .compile();

   app = moduleFixture.createNestApplication();
   await app.init();
   await app.listen(4007)
 });

 afterEach(() => {
   jest.clearAllMocks();
 });

 describe('GET: list/project-types', () => {
   beforeEach(() => {
     jest.spyOn(clientsService, 'get');
   });

   it('should return OK', async () => {
     const response = await request(app.getHttpServer()).get('/project-types');
     expect(response.statusCode).toEqual(200);
   });

 
 });

});