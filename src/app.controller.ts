import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
@Controller('api')
export class DataController {
  @Post('data')
  async handleData(@Body() data: any): Promise<any> {
    // Modify the received data or generate a new response object
    const response = {
      message: 'Data received and processed successfully',
      timestamp: new Date().toISOString(),
    };

    return response;
  }
}
