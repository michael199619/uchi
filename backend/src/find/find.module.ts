import { Module } from '@nestjs/common';

import { FindController } from './find.controller';
import { FindService } from './find.service';
import {AppConfigModule} from "../config/config.module";

@Module({
  imports: [
    AppConfigModule,
  ],
  providers: [FindService],
  controllers: [FindController],
  exports: [FindService],
})
export class FindModule {}
