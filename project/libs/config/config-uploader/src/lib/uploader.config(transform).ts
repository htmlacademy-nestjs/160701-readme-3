/* import { registerAs } from '@nestjs/config';
import { plainToInstance } from 'class-transformer';
import { UploaderEnvironment } from './uploader-environments';
import { validateSync } from 'class-validator';

const DEFAULT_PORT = 3000;

export interface UploaderConfig {
  environment: string;
  uploadDirector: string;
  port: number;
}

export default registerAs('application', (): UploaderConfig => {
  const config: UploaderConfig = {
    environment: process.env.NODE_ENV,
    uploadDirector: process.env.UPLOAD_DIRECTORY_PATH,
    port: parseInt(process.env.PORT ?? DEFAULT_PORT.toString(), 10),
  };

  const uploaderEnvironment = plainToInstance(UploaderEnvironment, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(uploaderEnvironment, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return config;
});
 */
