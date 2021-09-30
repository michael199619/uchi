import {registerAs} from '@nestjs/config';
import {UsersEntities} from '../users/entities';

export const app = registerAs('app', () => ({
    port: process.env.APP_PORT
}));

export const db = registerAs('db', () => ({
    type: 'postgres',
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    migrationsRun: false,
    entities: [
        ...UsersEntities
    ],
    logging: true,
    synchronize: true,
}));