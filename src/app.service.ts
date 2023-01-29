import { Injectable, NotFoundException } from '@nestjs/common';
// import { prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  /*
  async findAll(limit: number, page: number) {
    return await this.prisma.students.findMany({
      take: limit,
      skip: page * limit,
    });
  }
  async findOne(id: number) {
    const findUser = await this.prisma.students.findUnique({
      where: {
        id: id,
      },
    });
    if (findUser === null) {
      throw new NotFoundException(`Id ${id} not found `);
    } else {
      return findUser;
    }
  }
  */
}
