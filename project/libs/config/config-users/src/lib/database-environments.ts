import { IsNumber, IsString, Max, Min } from 'class-validator';

const MIN_PORT = 1000;
const MAX_PORT = 65535;

export enum EnvValidationRequiredMessage {
  DBHost = 'MongoDB host is required',
  DBName = 'Database name is required',
  DBPort = 'MongoDB port is required',
  DBUser = 'MongoDB user is required',
  DBPassword = 'MongoDB password is required',
  DBBaseAuth = 'MongoDB authentication base is required',
}

export class DatabaseEnvironment {
  @IsString({
    message: EnvValidationRequiredMessage.DBName,
  })
  public name: string;

  @IsString({
    message: EnvValidationRequiredMessage.DBHost,
  })
  public host: string;

  @IsNumber(
    {},
    {
      message: EnvValidationRequiredMessage.DBPort,
    }
  )
  @Min(MIN_PORT)
  @Max(MAX_PORT)
  public port: number;

  @IsString({
    message: EnvValidationRequiredMessage.DBUser,
  })
  public user: string;

  @IsString({
    message: EnvValidationRequiredMessage.DBPassword,
  })
  public password: string;

  @IsString({
    message: EnvValidationRequiredMessage.DBBaseAuth,
  })
  public authBase: string;
}
