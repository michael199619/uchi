import {registerAs} from '@nestjs/config';
import {UsersEntities} from '../users/entities';

export const app = registerAs('app', () => ({
    port: process.env.APP_PORT
}));

export const api = registerAs('api', () => ({
    googleCx: process.env.GOOGLE_CX,
    googleApi: process.env.GOOGLE_API,
    googleLr: process.env.GOOGLE_LR,
    googleToken: process.env.GOOGLE_TOKEN,
}));

export const jwt = registerAs('jwt', () => ({
    secret: process.env.JWT_SECRET_KEY,
    expires: process.env.JWT_SECRET_EXPIRES
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