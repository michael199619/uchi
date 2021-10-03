import {Controller, Post, Body, Req, Get, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import {RegisterUserDTO} from './dto/auth.dto';
import {Auth} from "../shared/decorators";
import {IRequest} from "../shared/types/request";
import {ApiTags} from "@nestjs/swagger";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiTags('user')
  @Auth()
  @Post('/mv-password')
  async mvPassword(
      @Req() req: IRequest,
      @Body() opt: RegisterUserDTO
  ) {
  //  await this.authService.mvPassword(req.user.userId, opt.oldPassword, opt.newPassword);
  }

}
