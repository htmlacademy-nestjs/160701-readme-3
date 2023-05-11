import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

const DEFAULT_PORT = 3000;

export interface BlogConfig {
  environment: string;
  port: number;
}

export default registerAs('application', (): BlogConfig => {
  const config: BlogConfig = {
    environment: process.env['NODE_ENV'] || 'development',
    port: parseInt(process.env['PORT'] || DEFAULT_PORT.toString(), 10),
  };

  const validationSchema = Joi.object<BlogConfig>({
    environment: Joi.string().valid('development', 'production', 'stage'),
    port: Joi.number().port().default(DEFAULT_PORT),
  });

  const { error } = validationSchema.validate(config, { abortEarly: true });

  if (error) {
    throw new Error(
      `[Blog Config]: Environments validation failed. Please check .env file.
       Error message: ${error.message}`
    );
  }

  return config;
});
