// - /src/iam/authentication/decoration/auth.decorator.ts - Auth decorator 

import { SetMetadata } from "@nestjs/common";
import { AuthType } from '../enums/auth-type.enums'

export const AUTH_TYPE_KEY = 'authType';

export const Auth = (...authTypes: AuthType[]) => 
    SetMetadata(AUTH_TYPE_KEY, authTypes);