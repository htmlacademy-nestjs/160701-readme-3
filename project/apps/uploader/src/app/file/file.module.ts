import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigService } from '@nestjs/config';

const SERVE_ROOT = '/static';
@Module({
  imports: [
    ServeStaticModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const rootPath = configService.get<string>(
          'application.uploadDirectory'
        );

        return [
          {
            rootPath,
            serveRoot: SERVE_ROOT,
            /*
            * `etag` — включает или отключает отправку заголовка ETag в ответ на запросы
            к статическим файлам. Значение по умолчанию - `true`.

            * `lastModified` — включает или отключает отправку заголовка Last-Modified в
            ответ на запросы к статическим файлам. Значение по умолчанию - true.

            * `maxAge` — устанавливает время жизни кэша для статических файлов, выраженное
            в миллисекундах. Значение по умолчанию - 0 (кэширование отключено).

            * `immutable` — включает или отключает отправку заголовка `Cache-Control: immutable`,
            который указывает на то, что статический файл никогда не будет изменен. Это
            позволяет клиентам кэшировать файлы более длительное время. Значение по
            умолчанию - `false`.

            * `index` - имя файла, который должен использоваться в качестве индексного
            при запросе к корневой папке. Например, если установить `index` в 'index.html',
            то при запросе к корневой папке будет отображаться файл `index.html`. Значение
            по умолчанию - `false` (отключено).

            * `redirect` — включает или отключает перенаправление при запросе к директории.
            Если установлено значение `true`, то при запросе к директории будет перенаправление
            на соответствующий URL с добавлением /. Значение по умолчанию - `false`.

            * `setHeaders - функция для установки пользовательских заголовков в ответ на
            запросы к статическим файлам. Функция принимает два аргумента: `res` - объект `http.ServerResponse`, и `path` - строка, указывающая на путь к запрашиваемому файлу.

            * `fallthrough` — должен ли сервер продолжать обработку запроса, если статический файл не найден. Если свойство установлено в `true`, то сервер продолжит обработку запроса и передаст его следующему обработчику маршрута. Если свойство установлено в `false`, то сервер вернет ответ с ошибкой `404`.
            */
            serveStaticOptions: {
              etag: true,
              lastModified: true,
              fallthrough: true,
            },
          },
        ];
      },
    }),
  ],
  providers: [FileService],
  controllers: [FileController],
})
export class FileModule {}
