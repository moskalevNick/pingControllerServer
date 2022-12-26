import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Prisma, Request, Response } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRequests(): Promise<Request[]> {
    return this.appService.getRequests();
  }

  @Post()
  create(@Body() controllerRequest: Prisma.RequestCreateInput) {
    return this.appService.create({ body: controllerRequest });
  }

  @Delete()
  delete() {
    return this.appService.delete();
  }

  @Get('response')
  getResponse(): Promise<Response> {
    return this.appService.getResponse();
  }

  @Post('response')
  saveResoponse(@Body() controllerResponse: Prisma.ResponseCreateInput) {
    return this.appService.saveResponse({ body: controllerResponse });
  }
}
