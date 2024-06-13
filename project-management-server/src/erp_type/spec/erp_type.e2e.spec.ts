import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../app.module';
import { ErpTypeService } from '../erp_type.service';




describe('ItContactModule', () => {
 let app: INestApplication;
 let service: ErpTypeService
 
 const erpTypeService = {
   get: jest.fn(),
 };

 beforeEach(async () => {
   const moduleFixture: TestingModule = await Test.createTestingModule({
     imports: [AppModule],
   })
     .overrideProvider(service)
     .useValue(erpTypeService)
     .compile();

   app = moduleFixture.createNestApplication();
   await app.init();
   await app.listen(4002)
 });

 afterEach(() => {
   jest.clearAllMocks();
 });

 describe('GET: list/erp_types', () => {
   beforeEach(() => {
     jest.spyOn(erpTypeService, 'get');
   });

   it('should return OK', async () => {
     const response = await request(app.getHttpServer()).get('/list/erp_types');
     expect(response.statusCode).toEqual(200);
   });
 });

});