import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('images')
  getAllImages() {
    return this.appService.getAllImages();
  }
}
