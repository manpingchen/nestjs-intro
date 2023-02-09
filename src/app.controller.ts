import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // equals to @GET('/')
  getHello(): string {
    return this.appService.getHello();
  }
}
