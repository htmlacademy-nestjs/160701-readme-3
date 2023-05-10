import { Inject, NotFoundException } from '@nestjs/common';
import { uploaderConfig } from '@project/config/config-uploader';
import { ConfigType } from '@nestjs/config';
import 'multer';
import { ensureDir } from 'fs-extra';
import { writeFile } from 'node:fs/promises';
import dayjs from 'dayjs';
import crypto from 'node:crypto';
import { extension } from 'mime-types';
import { FileEntity } from './file.entity';
import { FileRepository } from './file.repository';

type WritedFile = {
  hashName: string;
  fileExtension: string;
  subDirectory: string;
  path: string;
};
export class FileService {
  constructor(
    @Inject(uploaderConfig.KEY)
    private readonly applicationConfig: ConfigType<typeof uploaderConfig>,
    private readonly fileRepository: FileRepository
  ) {}

  private async writeFile(file: Express.Multer.File): Promise<WritedFile> {
    const [year, month] = dayjs().format('YYYY MM').split(' ');
    const subDirectory = `${year}/${month}`;
    const { uploadDirectory } = this.applicationConfig;

    const uuid = crypto.randomUUID();
    const fileExtension = extension(file.mimetype);
    const hashName = `${uuid}.${fileExtension}`;

    const uploadDirectoryPath = `${uploadDirectory}/${subDirectory}`;
    const destinationFile = `${uploadDirectoryPath}/${hashName}`;

    await ensureDir(uploadDirectoryPath);
    await writeFile(destinationFile, file.buffer);

    return {
      hashName,
      fileExtension,
      subDirectory,
      path: `/${subDirectory}/${hashName}`,
    };
  }

  public async saveFile(file: Express.Multer.File) {
    const writeFile = await this.writeFile(file);

    const newFile = new FileEntity({
      ...file,
      originalName: file.originalname,
      hashName: writeFile.hashName,
      path: writeFile.path,
    });

    return this.fileRepository.create(newFile);
  }

  public async getFile(fileId: string) {
    const existFile = await this.fileRepository.findById(fileId);

    if (!existFile) {
      throw new NotFoundException(`File with ${fileId} not found.`);
    }

    return existFile;
  }
}
