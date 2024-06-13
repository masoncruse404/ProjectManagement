import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../app.module';
import { ProjectStatusService } from '../project_status.service';





describe('ProjectStatusModule', () => {
 let app: INestApplication;
 let service: ProjectStatusService
 
 const clientsService = {
   get: jest.fn(),
 };

 beforeEach(async () => {
   const moduleFixture: TestingModule = await Test.createTestingModule({
     imports: [AppModule],
   })
     .overrideProvider(service)
     .useValue(ProjectStatusService)
     .compile();

   app = moduleFixture.createNestApplication();
   await app.init();
   await app.listen(4006)
 });

 afterEach(() => {
   jest.clearAllMocks();
 });

 describe('GET: list/project-status', () => {
   beforeEach(() => {
     jest.spyOn(clientsService, 'get');
   });

   it('should return OK', async () => {
     const response = await request(app.getHttpServer()).get('/project-status');
     expect(response.statusCode).toEqual(200);
   });

 
 });

});