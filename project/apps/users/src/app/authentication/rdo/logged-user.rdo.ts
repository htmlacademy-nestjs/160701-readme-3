import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';

export class LoggedUserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '13',
  })
  @Expose({ name: '_id' })
  @Transform(({ obj }) => obj._id.toString())
  public id: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Access token',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDU2OGI3OTEyOTU1ZGI0OGViMGY5ZDciLCJlbWFpbCI6InVzZXJAbm90Zm91bmQubG9jYWwiLCJmaXJzdE5hbWUiOiJLZWtzIiwibGFzdE5hbWUiOiJTbWl0aCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjgzNjQ5MDU0LCJleHAiOjE2ODM2NDk2NTR9.AxUa05Zkb-je2NSBe9W3MpzvNH-K3jFdEVHC-RTMdy0',
  })
  @Expose()
  public accessToken: string;
}
