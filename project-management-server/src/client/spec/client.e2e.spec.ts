import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../app.module';
import { ClientService } from '../client.service';




describe('ItContactModule', () => {
 let app: INestApplication;
 let service: ClientService
 
 const clientsService = {
   get: jest.fn(),
 };

 beforeEach(async () => {
   const moduleFixture: TestingModule = await Test.createTestingModule({
     imports: [AppModule],
   })
     .overrideProvider(service)
     .useValue(ClientService)
     .compile();

   app = moduleFixture.createNestApplication();
   await app.init();
   await app.listen(4004)
 });

 afterEach(() => {
   jest.clearAllMocks();
 });

 describe('GET: list/clients', () => {
   beforeEach(() => {
     jest.spyOn(clientsService, 'get');
   });

   it('should return OK', async () => {
     const response = await request(app.getHttpServer()).get('/list/clients');
     expect(response.statusCode).toEqual(200);
   });

 
 });

});