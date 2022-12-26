import { Injectable } from '@nestjs/common';
import { Prisma, Request } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getRequests(): Promise<Request[]> {
    return this.prisma.request.findMany({});
  }

  create(controllerReques: Prisma.RequestCreateInput) {
    return this.prisma.request.create({ data: controllerReques });
  }

  delete() {
    return this.prisma.request.deleteMany();
  }
}
