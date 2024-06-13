import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';


import { AppModule } from '../../app.module';
import { ITContactsService } from '../it_contacts.service';



describe('ItContactModule', () => {
 let app: INestApplication;
 let iTContactsService: ITContactsService
 
 const testITService = {
   get: jest.fn(),
 };

 beforeEach(async () => {
   const moduleFixture: TestingModule = await Test.createTestingModule({
     imports: [AppModule],
   })
     .overrideProvider(iTContactsService)
     .useValue(testITService)
     .compile();

   app = moduleFixture.createNestApplication();
   await app.init();
   await app.listen(3770)
 });

 afterEach(() => {
   jest.clearAllMocks();
 });

 describe('GET: list/it_contacts', () => {
   beforeEach(() => {
     jest.spyOn(testITService, 'get');
   });

   it('should return OK', async () => {
     const response = await request(app.getHttpServer()).get('v1/it-contacts');
     expect(response.statusCode).toEqual(200);
   });
 });

});