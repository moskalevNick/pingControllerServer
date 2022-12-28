import { Body, Controller, Delete, Get, Post, Req } from '@nestjs/common';
import * as rawbody from 'raw-body';
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
  async create(
    @Body() controllerRequest: Prisma.RequestCreateInput,
    @Req() req: any,
  ) {
    if (req.readable) {
      const raw = await rawbody(req);
      const text: any = raw.toString().trim();
      return this.appService.create({ body: JSON.parse(text) });
    } else {
      return this.appService.create({ body: controllerRequest });
    }
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
  saveResponse(@Body() controllerResponse: Prisma.ResponseCreateInput) {
    return this.appService.saveResponse({ body: controllerResponse });
  }
}
