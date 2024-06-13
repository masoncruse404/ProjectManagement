import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../app.module';
import { ListProjectsService } from '../list_projects.service';




describe('ListProjectsModule', () => {
 let app: INestApplication;
 let service: ListProjectsService
 
 const listProjectsService = {
   get: jest.fn(),
 };

 beforeEach(async () => {
   const moduleFixture: TestingModule = await Test.createTestingModule({
     imports: [AppModule],
   })
     .overrideProvider(service)
     .useValue(ListProjectsService)
     .compile();

   app = moduleFixture.createNestApplication();
   await app.init();
   await app.listen(4005)
 });

 afterEach(() => {
   jest.clearAllMocks();
 });

 describe('GET: list/erp_types', () => {
   beforeEach(() => {
     jest.spyOn(listProjectsService, 'get');
   });

   it('should return OK', async () => {
     const response = await request(app.getHttpServer()).get('/list/projects/252');
     expect(response.statusCode).toEqual(200);
   });

 
 });

});