/* import { IsNumber, IsString, Max, Min } from 'class-validator';

const MIN_PORT = 1000;
const MAX_PORT = 65535;

export enum EnvValidationRequiredMessage {
  environment = 'environment is required',
  uploadDirectory = 'uploadDirectory name is required',
  port = 'Port is required',
}

export class UploaderEnvironment {
  @IsString({
    message: EnvValidationRequiredMessage.environment,
  })
  public environment: string;

  @IsString({
    message: EnvValidationRequiredMessage.uploadDirectory,
  })
  public uploadDirectory: string;

  @IsNumber(
    {},
    {
      message: EnvValidationRequiredMessage.port,
    }
  )
  @Min(MIN_PORT)
  @Max(MAX_PORT)
  public port: number;
}
 */
