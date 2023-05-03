import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { fillObject } from '@project/util/util-core';
import { UserRdo } from './rdo/user.rdo.js';
import { LoggedUserRdo } from './rdo/logged-user.rdo.js';
@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);

    return fillObject(UserRdo, newUser);
  }

  @Post('login')
  public async login(@Body() dto: LoggedUserRdo) {
    const verifiedUser = await this.authService.verifyUser(dto);

    return fillObject(LoggedUserRdo, verifiedUser);
  }

  @Get(':id')
  public async show(@Param('id') id: string) {
    const existUser = await this.authService.getUser(id);

    return fillObject(UserRdo, existUser);
  }
}
