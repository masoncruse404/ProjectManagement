// src/main.ts - Main entry point 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {

  let configService = new ConfigService();
  const PORT = configService.get('PORT')
  console.log(`PORT:${PORT}`)
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ["http://localhost:3775"],  
    methods: ["GET", "POST", "PUT", "OPTIONS", "DELETE"],
    credentials: true
  });

  await app.listen(3770);
}

bootstrap();
