import { Module } from '@nestjs/common';

import { AnalizeController } from './analize.controller';

@Module({
  providers: [],
  controllers: [AnalizeController],
  exports: [],
})
export class AnalizeModule {}
