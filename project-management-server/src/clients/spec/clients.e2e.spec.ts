import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../app.module';
import { ClientsService } from '../clients.service';




describe('ClientsModule', () => {
 let app: INestApplication;
 let service: ClientsService
 
 const testClientsService = {
   get: jest.fn(),
 };

 beforeEach(async () => {
   const moduleFixture: TestingModule = await Test.createTestingModule({
     imports: [AppModule],
   })
     .overrideProvider(service)
     .useValue(testClientsService)
     .compile();

   app = moduleFixture.createNestApplication();
   await app.init();
   await app.listen(3770)
 });

 afterEach(() => {
   jest.clearAllMocks();
 });

 describe('GET: /clients', () => {
   beforeEach(() => {
     jest.spyOn(testClientsService, 'get');
   });

   it('should return OK', async () => {
     const response = await request(app.getHttpServer()).get('/v1/clients');
     expect(response.statusCode).toEqual(200);
   });
 });

});