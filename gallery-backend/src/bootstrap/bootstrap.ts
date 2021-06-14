import { join } from 'path';
import { cwd } from 'process';

process.env['NODE_CONFIG_DIR'] = join(cwd(), 'config');

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import * as compression from 'compression';
import { configureSwagger } from './swagger';
import { DEFAULT_BOOTSTRAP_CONFIG } from './default.config';
import { BootstrapConfig } from './types/bootstrap.types';
import { configureSecurity } from './configure-security';

const logger = new Logger('bootstrap');

export async function createNestApp(
  AppModule,
  port: number,
  config: BootstrapConfig = DEFAULT_BOOTSTRAP_CONFIG
) {
  config = {
    ...config,
    ...DEFAULT_BOOTSTRAP_CONFIG,
  };

  const { swagger, globalPrefix } = config;

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter()
  );

  app.enableCors();
  app.setGlobalPrefix(globalPrefix);
  app.use(compression());
  configureSecurity(app);
  swagger ? configureSwagger(app) : logger.debug('swagger is disabled.');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validateCustomDecorators: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );

  return app.listen(port).then(() => {
    Logger.log(`server running on port http://localhost:${port}/api/`);
    swagger &&
      Logger.log(`swagger running on port http://localhost:${port}/api/docs`);
  });
}
