import { Injectable } from '@nestjs/common';
import { Prisma, Request, Response } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getRequests(): Promise<Request[]> {
    return this.prisma.request.findMany({});
  }

  async create(controllerRequest: Prisma.RequestCreateInput) {
    await this.prisma.request.create({ data: controllerRequest });
    const response = await this.prisma.response.findFirst({});
    return response.body;
  }

  async getResponse(): Promise<Response> {
    return this.prisma.response.findFirst({});
  }

  async saveResponse(controllerResponse: Prisma.ResponseCreateInput) {
    await this.prisma.response.deleteMany({});
    return this.prisma.response.create({ data: controllerResponse });
  }

  delete() {
    return this.prisma.request.deleteMany();
  }
}
