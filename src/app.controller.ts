import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Prisma, Request } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Request[]> {
    return this.appService.getRequests();
  }

  @Post()
  create(@Body() controllerReques: Prisma.RequestCreateInput) {
    return this.appService.create({ body: controllerReques });
  }

  @Delete()
  delete() {
    return this.appService.delete();
  }
}
