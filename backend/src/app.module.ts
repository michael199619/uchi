import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsersModule} from './users/users.module';
import {FindModule} from './find/find.module';
import {AuthModule} from './auth/auth.module';
import {AppConfigModule} from './config/config.module';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {ConnectionOptions} from 'typeorm';
import {SeedService} from './db/seed.service';

@Module({
    imports: [
        AppConfigModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => configService.get<ConnectionOptions>('db'),
        }),
        AuthModule,
         UsersModule,
         FindModule,
    ],
    controllers: [],
    providers: [SeedService],
    exports: [SeedService]
})

export class AppModule {}
