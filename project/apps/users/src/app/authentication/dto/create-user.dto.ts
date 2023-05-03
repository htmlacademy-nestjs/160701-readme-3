import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru',
  })
  public email: string;

  @ApiProperty({
    description: 'User birth date',
    example: '1981-03-12',
  })
  public dateBirth: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Keks',
  })
  public firstName: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov',
  })
  public lastName: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  public password: string;
}
