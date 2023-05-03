import { ConflictException, Injectable } from '@nestjs/common';
import { BlogUserMemoryRepository } from '../blog-user/blog-user.memory.repository';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UserRole } from '@project/shared/shared-types';
import dayjs from 'dayjs';
import { AUTH_USER_EXISTS } from './authentication.constant.js';
import { BlogUserEntity } from '../blog-user/blog-user.entity.js';

@Injectable()
export class AuthenticationService {
  constructor(private readonly blogUserRepository: BlogUserMemoryRepository) {}

  public async register(dto: CreateUserDto) {
    const { email, firstName, lastName, password, dateBirth } = dto;

    const blogUser = {
      email,
      firstName,
      lastName,
      role: UserRole.User,
      avatar: '',
      dateBirth: dayjs(dateBirth).toDate(),
      passwordHash: '',
    };

    const existUser = await this.blogUserRepository.findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }
    const userEntity = await new BlogUserEntity(blogUser).setPassword(password);

    return this.blogUserRepository.create(userEntity);
  }
}
