import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { fillObject } from '@project/util/util-core';
import { UserRdo } from './rdo/user.rdo.js';
@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);

    return fillObject(UserRdo, newUser);
  }
}
