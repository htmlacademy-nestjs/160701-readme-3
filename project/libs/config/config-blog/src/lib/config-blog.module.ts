import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import blogConfig from './config/blog.config';

const ENV_FILE_PATH = 'apps/blog/blog.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [blogConfig],
      envFilePath: ENV_FILE_PATH,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ConfigBlogModule {}
