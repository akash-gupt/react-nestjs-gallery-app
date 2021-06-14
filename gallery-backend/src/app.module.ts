import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { GlobalModule } from './global.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PHOTO_DIR_NAME } from './app.constants';
@Module({
  imports: [
    GlobalModule,
    CoreModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', PHOTO_DIR_NAME),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
