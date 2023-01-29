import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AshtarCodesService } from './ashtar_codes.service';
import { CreateAshtarCodeDto } from './dto/create-ashtar_code.dto';
import { UpdateAshtarCodeDto } from './dto/update-ashtar_code.dto';

@Controller('ashtar-codes')
export class AshtarCodesController {
  constructor(private readonly ashtarCodesService: AshtarCodesService) {}

  @Get('owner/:id')
  findManyOwner(@Param('id') Owner: number) {
    console.log('test searching for ashtar-codes for OwnerId');
    return this.ashtarCodesService.findManyOwner(+Owner);
  }

  @Get('code/:id')
  findManyCode(@Param('id') code: any) {
    console.log('test searching for ashtar-codes for codeId');
    return this.ashtarCodesService.findManyCode(code);
  }

  @Post()
  create(@Body() createAshtarCodeDto: CreateAshtarCodeDto) {
    return this.ashtarCodesService.create(createAshtarCodeDto);
  }

  @Get()
  findAll() {
    return this.ashtarCodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ashtarCodesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAshtarCodeDto: UpdateAshtarCodeDto,
  ) {
    return this.ashtarCodesService.update(+id, updateAshtarCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ashtarCodesService.remove(+id);
  }
}
