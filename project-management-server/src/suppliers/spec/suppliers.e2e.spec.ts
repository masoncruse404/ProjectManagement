import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../app.module';
import { SuppliersService } from '../suppliers.service';




describe('ProjectStatusModule', () => {
 let app: INestApplication;
 let service: SuppliersService
 
 const clientsService = {
   get: jest.fn(),
 };

 beforeEach(async () => {
   const moduleFixture: TestingModule = await Test.createTestingModule({
     imports: [AppModule],
   })
     .overrideProvider(service)
     .useValue(SuppliersService)
     .compile();

   app = moduleFixture.createNestApplication();
   await app.init();
   await app.listen(4008)
 });

 afterEach(() => {
   jest.clearAllMocks();
 });

 describe('GET: list/suppliers', () => {
   beforeEach(() => {
     jest.spyOn(clientsService, 'get');
   });

   it('should return OK', async () => {
     const response = await request(app.getHttpServer()).get('/suppliers');
     expect(response.statusCode).toEqual(200);
   });

 
 });

});