import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: any = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "12345678",
    "database": "hex",
    "entities": ["dist/**/*{.ts,.js}"],
    "synchronize": false,
    "retryDelay": 3000,
    "retryAttempts": 10
}