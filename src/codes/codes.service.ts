/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCodeDto } from './dto/create-code.dto';
import { UpdateCodeDto } from './dto/update-code.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CodesService {
  constructor(private prisma: PrismaService) {}
  create(createCodeDto: CreateCodeDto) {
    return 'This action adds a new code';
  }

  async findManyOwner(Owner: number) {
    const students = await this.prisma.codes.findMany({
      include: {
        teachers: true,
      },
      where: {
        owner: Owner,
      },
    });
    return students;
  }

  async findManyCode(code: any) {
    const students = await this.prisma.codes.findMany({
      include: {
        teachers: true,
      },
      where: {
        code: code,
      },
    });
    return students;
  }

  findAll() {
    return `This action returns all codes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} code`;
  }

  update(id: number, updateCodeDto: UpdateCodeDto) {
    return `This action updates a #${id} code`;
  }

  remove(id: number) {
    return `This action removes a #${id} code`;
  }
}
