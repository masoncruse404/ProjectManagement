// src/iam/config/jwt.config.ts - Registers jwt for config module

// nestjs
import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => {
  return {
    secret: process.env.JWT_SECRET || "cc3da9eee1a49e32cb7dbf85dbc12c3456abe2d0ce325c82f1233fe7076512a3",
    audience: process.env.JWT_TOKEN_AUDIENCE || "http://project-management.masoncruse.com",
    issuer: process.env.JWT_TOKEN_ISSUER || "http://api.dtreetech.net",
    accessTokenTtl: parseInt(process.env.JWT_ACCESS_TOKEN_TTL ?? '1800', 10), 
  };
});