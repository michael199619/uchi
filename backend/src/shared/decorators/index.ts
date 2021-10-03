import {
  createParamDecorator,
  applyDecorators,
  SetMetadata,
  UseGuards,
  ExecutionContext,
} from '@nestjs/common';

import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { IRequest } from '../types/request';
import { UserStatus } from '../../users/entities';
import {HeaderGuard} from "../guards/header.guard";

export function Auth(
  status: UserStatus = 'ACTIVE',
) {
  return applyDecorators(
    SetMetadata('status', status),
    UseGuards(JwtAuthGuard),
  );
}

export function Headers(
  headers: {[key: string]: string} = {}
) {
  return applyDecorators(
    SetMetadata('headers', headers),
    UseGuards(HeaderGuard),
  );
}

export const UserSession = createParamDecorator(
  (data: unknown, request: IRequest) => {
    return request.user;
  },
);
