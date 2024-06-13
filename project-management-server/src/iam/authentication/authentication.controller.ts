// src/iam/authentication/authentication.controller.ts - Authentication controller

import { Body, Controller, Inject, Post, HttpCode } from '@nestjs/common';

// jwt
import { JwtService } from '@nestjs/jwt';
import jwtConfig from 'src/iam/config/jwt.config';
import { ConfigType } from '@nestjs/config';


// dto
import { SignInDto } from './dto/sign_in.dto/sign_in.dto';

// Auth
import { Auth } from './decoration/auth.decorator';
import { AuthType } from './enums/auth-type.enums';

@Auth(AuthType.None)
@Controller('v1/authentication')
export class AuthenticationController {
    constructor(
      
    ){}

   
 


}
