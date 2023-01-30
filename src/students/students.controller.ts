/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('search')
  search_studentsName(@Body() body) {
    console.log('test searching for search_students by FirstName');
    return this.studentsService.search_studentsName(body.FirstName);
  }

  // @Post('search')
  // search_studentsEmail(@Body() body) {
  //   console.log('test searching for search_students by email');
  //   return this.studentsService.search_studentsEmail(body.email);
  // }

  @Post('search/phone')
  search_studentsPhone(@Body() body) {
    console.log('test searching for search_students by Phone');
    return this.studentsService.search_studentsPhone(body.phone);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}
