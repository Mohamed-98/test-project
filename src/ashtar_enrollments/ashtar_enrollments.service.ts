import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateAshtarEnrollmentDto } from './dto/create-ashtar_enrollment.dto';
import { UpdateAshtarEnrollmentDto } from './dto/update-ashtar_enrollment.dto';

@Injectable()
export class AshtarEnrollmentsService {
  constructor(private prisma: PrismaService) {}
  create(createAshtarEnrollmentDto: CreateAshtarEnrollmentDto) {
    return 'This action adds a new ashtarEnrollment';
  }
  async findManyStudent(Student: number) {
    const students = await this.prisma.ashtar_enrollments.findMany({
      where: {
        student: Student,
      },
    });
    return students;
  }

  async findManyCode(code: any) {
    const students = await this.prisma.ashtar_enrollments.findMany({
      where: {
        code: code,
      },
    });
    return students;
  }

  findAll() {
    return `This action returns all ashtarEnrollments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ashtarEnrollment`;
  }

  update(id: number, updateAshtarEnrollmentDto: UpdateAshtarEnrollmentDto) {
    return `This action updates a #${id} ashtarEnrollment`;
  }

  remove(id: number) {
    return `This action removes a #${id} ashtarEnrollment`;
  }
}
