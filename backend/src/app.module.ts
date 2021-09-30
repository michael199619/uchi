import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsersModule} from './users/users.module';
import {AnalizeModule} from './analize/analize.module';
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
         UsersModule,
         AnalizeModule
    ],
    controllers: [],
    providers: [SeedService],
    exports: [SeedService]
})

export class AppModule {}
