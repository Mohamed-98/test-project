/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}
  //--------------Search by firstname--------------------------------

  async search_studentsName(firstname) {
    const students = await this.prisma.students.findMany({
      where: {
        firstname: { contains: firstname },
      },
    });
    return students;
  }

  //--------------Search by Email--------------------------------
  // async search_studentsEmail(email) {
  //   const students = await this.prisma.students.findMany({
  //     where: {
  //       email: { contains: email },
  //     },
  //   });
  //   return students;
  // }

  async search_studentsPhone(phone) {
    const students = await this.prisma.students.findMany({
      where: {
        phone: { contains: phone },
      },
    });
    return students;
  }

  findAll() {
    return `This action returns all students`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
