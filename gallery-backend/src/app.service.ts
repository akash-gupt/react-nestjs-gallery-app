import { Injectable } from '@nestjs/common';

import { readdir } from 'fs';
import path from 'path';
import { PHOTO_DIR_NAME } from './app.constants';
@Injectable()
export class AppService {
  private readFiles() {
    return new Promise((resolve, reject) => {
      readdir(PHOTO_DIR_NAME, (error, fileNames) => {
        if (error) {
          return reject(error);
        }

        return resolve(fileNames);
      });
    });
  }

  async getAllImages() {
    const files = await this.readFiles();
    return files;
  }
}
