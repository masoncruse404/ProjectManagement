// src/iam/iam.module.ts - Identity and access management module

// nestjs
import { Module } from '@nestjs/common';

// jwt
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from "./config/jwt.config"

// config
import { ConfigModule } from '@nestjs/config';
import { AuthenticationController } from './authentication/authentication.controller';


// typeorm
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationGuard } from './authentication/authentication/authentication.guard';
import { AccessTokenGuard } from './authentication/guards/access-token/access-token.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
    imports: [
        JwtModule.registerAsync(jwtConfig.asProvider()),
        ConfigModule.forFeature(jwtConfig),
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: AuthenticationGuard,
          },
          AccessTokenGuard,
    ],
    controllers: [AuthenticationController],
})

export class IamModule {}
