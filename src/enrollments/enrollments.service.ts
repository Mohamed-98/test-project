import { Injectable } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) {}
  create(createEnrollmentDto: CreateEnrollmentDto) {
    return 'This action adds a new enrollment';
  }

  async findManyStudent(Student: number) {
    const students = await this.prisma.enrollments.findMany({
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
    const students = await this.prisma.enrollments.findMany({
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
    return `This action returns all enrollments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enrollment`;
  }

  update(id: number, updateEnrollmentDto: UpdateEnrollmentDto) {
    return `This action updates a #${id} enrollment`;
  }

  remove(id: number) {
    return `This action removes a #${id} enrollment`;
  }
}
