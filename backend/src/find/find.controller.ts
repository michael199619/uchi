import {Body, Controller, Delete, Get, Param, Post, Query, Req, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FindService} from "./find.service";
import {ApiTags} from "@nestjs/swagger";
import {FindDto} from "./dto/find.dto";
import {CategoriesDto} from "./dto/categories.dto";
import {SubjectDto} from "./dto/subject.dto";

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

  @Post('categories')
  saveCategories(
      @Body() categories: CategoriesDto
  ) {
    return this.findService.saveCategories(categories)
  }

  @Get('categories')
  getCategories() {
    return this.findService.getCategories()
  }

  @Delete('categories')
  deleteCategories(@Query('id') id: number) {
    return this.findService.removeCategories(id)
  }

  @Post('subject')
  saveSubject(
      @Body() subject: SubjectDto
  ) {
    return this.findService.saveSubject(subject)
  }

  @Get('subject')
  getSubject() {
    return this.findService.getSubject()
  }

  @Delete('subject')
  deleteSubject(@Query('id') id: number) {
    return this.findService.removeSubject(id)
  }
}