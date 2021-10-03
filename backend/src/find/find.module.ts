import { Module } from '@nestjs/common';

import { FindController } from './find.controller';
import { FindService } from './find.service';
import {AppConfigModule} from "../config/config.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CategoriesEntities} from "./entities";

@Module({
  imports: [
    AppConfigModule,
    TypeOrmModule.forFeature([...CategoriesEntities]),
  ],
  providers: [FindService],
  controllers: [FindController],
  exports: [FindService],
})
export class FindModule {}
