/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateAshtarCodeDto } from './dto/create-ashtar_code.dto';
import { UpdateAshtarCodeDto } from './dto/update-ashtar_code.dto';

@Injectable()
export class AshtarCodesService {
  constructor(private prisma: PrismaService) {}
  create(createAshtarCodeDto: CreateAshtarCodeDto) {
    return 'This action adds a new ashtarCode';
  }
  async findManyOwner(Owner: number) {
    const students = await this.prisma.ashtar_codes.findMany({
      include: {
        teachers: true,
        students: true,
      },
      where: {
        owner: Owner,
      },
    });
    return students;
  }

  async findManyCode(code: any) {
    const students = await this.prisma.ashtar_codes.findMany({
      include: {
        teachers: true,
        students: true,
      },
      where: {
        code: code,
      },
    });
    return students;
  }

  findAll() {
    return `This action returns all ashtarCodes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ashtarCode`;
  }

  update(id: number, updateAshtarCodeDto: UpdateAshtarCodeDto) {
    return `This action updates a #${id} ashtarCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} ashtarCode`;
  }
}
