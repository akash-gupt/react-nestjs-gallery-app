import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';

const BASE_PATH = path.join(process.cwd(), 'config');

const DEFAULT_ENV_FILE = path.join(BASE_PATH, `.default.env`);
const ENV_FILE = path.join(
  BASE_PATH,
  `.${String(process.env.NODE_ENV).toLowerCase()}.env`
);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [ENV_FILE, DEFAULT_ENV_FILE],
      isGlobal: true,
    }),
  ],
})
export class MyConfigModule {}
