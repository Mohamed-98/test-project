/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Injectable()
export class ActivitiesService {
  // constructor(private prisma: PrismaService) {}
  constructor(private prisma: PrismaService) {}
  create(createActivityDto: CreateActivityDto) {
    return 'This action adds a new activity';
  }
  async findMany(id: number) {
    const students = await this.prisma.activities.findMany({
      where: {
        id: id,
      },
    });
    return students;
  }
  findAll() {
    return `This action returns all activities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
