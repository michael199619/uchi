import {Body, Controller, Delete, Get, Param, Post, Query, Req, UploadedFile, UseInterceptors} from '@nestjs/common';
import { UsersService } from './users.service';
import {StaffQuery, PersonDataFormat} from './dto/user.dto';
import {ApiBody, ApiConsumes, ApiProduces} from "@nestjs/swagger";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Post('')
  async getPersons(@Body() body: StaffQuery) {
    return await this.usersService.getUsers(body);
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return await this.usersService.getUserById(id);
  }


  @Post('')
  async createUser(@Body() user: PersonDataFormat) {
     const {id} = await this.usersService.createUser(user);
     return {id};
  }


  @Delete(':id')
  async removeUserById(@Param('id') id: number) {
    await this.usersService.removeUserById(id);
  }

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiProduces('application/vnd.ms-excel')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'file',
          format: 'binary',
        }
      }
    }
  })
  @UseInterceptors(FileInterceptor('file'))
  async addUserFromFile(@UploadedFile('file') file) {
    await this.usersService.addUserFromFile(file);
  }
}