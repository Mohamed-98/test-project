/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateBuyerDto } from './dto/create-buyer.dto';
import { UpdateBuyerDto } from './dto/update-buyer.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BuyersService {
  constructor(private prisma: PrismaService) {}
  create(createBuyerDto: CreateBuyerDto) {
    return 'This action adds a new buyer';
  }

  async findManyStudent(Student: number) {
    const students = await this.prisma.buyers.findMany({
      include: {
        teachers: true,
        subjects: true,
      },
      where: {
        student: Student,
      },
    });
    return students;
  }

  async findManyCode(code: any) {
    const students = await this.prisma.buyers.findMany({
      include: {
        teachers: true,
        subjects: true,
      },
      where: {
        code: code,
      },
    });
    return students;
  }

  findAll() {
    return `This action returns all buyers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buyer`;
  }

  update(id: number, updateBuyerDto: UpdateBuyerDto) {
    return `This action updates a #${id} buyer`;
  }

  remove(id: number) {
    return `This action removes a #${id} buyer`;
  }
}
