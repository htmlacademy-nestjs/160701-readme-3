import { Inject } from '@nestjs/common';
import { uploaderConfig } from '@project/config/config-uploader';
import { ConfigType } from '@nestjs/config';
import 'multer';
import { ensureDir } from 'fs-extra';
import { writeFile } from 'node:fs/promises';

export class FileService {
  constructor(
    @Inject(uploaderConfig.KEY)
    private readonly applicationConfig: ConfigType<typeof uploaderConfig>
  ) {}

  public async writeFile(file: ExpressAdapter.Multer.File): Promise<string> {
    const uploadDirectoryPath = this.applicationConfig.uploadDirectory;
    const destinationFile = `${uploadDirectoryPath}/${file.orinalName}`;

    await ensureDir(uploadDirectoryPath);
    await writeFile(destinationFile, file.buffer);

    return destinationFile;
  }
}
