import {Controller, Get, Post, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('auth')
@Controller('auth')
export class RegisterController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  /**
   * @api {get} /auth/getKey
   * @apiName Register
   * @apiGroup Auth
   *
   * @apiSuccess {object} -
   * @apiSuccess {string} -.key
   *
   */
  @Get('getKey')
  async register() {
    return {
      key: await this.authService.key()
    };
  }

}
