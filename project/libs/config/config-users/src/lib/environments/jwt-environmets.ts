import { IsString } from 'class-validator';

export enum JwtEnvironmentRequiredMessage {
  accessTokenSecret = 'accessTokenSecret is required',
  accessTokenExpiresIn = 'accessTokenExpiresIn is required',
}

export class JwtEnvironment {
  @IsString({
    message: JwtEnvironmentRequiredMessage.accessTokenSecret,
  })
  public accessTokenSecret: string;

  @IsString({
    message: JwtEnvironmentRequiredMessage.accessTokenExpiresIn,
  })
  public accessTokenExpiresIn: string;
}
