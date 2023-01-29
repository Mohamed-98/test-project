import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AshtarEnrollmentsService } from './ashtar_enrollments.service';
import { CreateAshtarEnrollmentDto } from './dto/create-ashtar_enrollment.dto';
import { UpdateAshtarEnrollmentDto } from './dto/update-ashtar_enrollment.dto';

@Controller('ashtar-enrollments')
export class AshtarEnrollmentsController {
  constructor(
    private readonly ashtarEnrollmentsService: AshtarEnrollmentsService,
  ) {}

  @Get('student/:id')
  findManyStudent(@Param('id') Student: number) {
    console.log('test findOne');
    return this.ashtarEnrollmentsService.findManyStudent(+Student);
  }

  @Get('code/:id')
  findManyCode(@Param('id') code: any) {
    console.log('test findOne');
    return this.ashtarEnrollmentsService.findManyCode(code);
  }

  @Post()
  create(@Body() createAshtarEnrollmentDto: CreateAshtarEnrollmentDto) {
    return this.ashtarEnrollmentsService.create(createAshtarEnrollmentDto);
  }

  @Get()
  findAll() {
    return this.ashtarEnrollmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ashtarEnrollmentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAshtarEnrollmentDto: UpdateAshtarEnrollmentDto,
  ) {
    return this.ashtarEnrollmentsService.update(+id, updateAshtarEnrollmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ashtarEnrollmentsService.remove(+id);
  }
}
