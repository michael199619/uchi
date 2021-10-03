import {Body, Controller, Delete, Get, Param, Post, Query, Req, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FindService} from "./find.service";
import {ApiTags} from "@nestjs/swagger";
import {FindDto} from "./dto/find.dto";

@ApiTags('find')
@Controller('find')
export class FindController {
  constructor(
      private findService: FindService,
      ) {
  }

  @Get()
  search(@Query() find: FindDto) {
    return this.findService.find(find)
  }
}