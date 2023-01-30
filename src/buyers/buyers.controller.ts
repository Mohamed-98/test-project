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
import { BuyersService } from './buyers.service';
import { CreateBuyerDto } from './dto/create-buyer.dto';
import { UpdateBuyerDto } from './dto/update-buyer.dto';

@Controller('buyers')
export class BuyersController {
  constructor(private readonly buyersService: BuyersService) {}

  @Get('student/:id')
  findManyStudent(@Param('id') Student: number) {
    console.log('test searching for buyers by studentId');
    return this.buyersService.findManyStudent(+Student);
  }

  @Get('code/:id')
  findManyCode(@Param('id') code: any) {
    console.log('test searching for buyers by codeId');
    return this.buyersService.findManyCode(code);
  }

  @Post()
  create(@Body() createBuyerDto: CreateBuyerDto) {
    return this.buyersService.create(createBuyerDto);
  }

  @Get()
  findAll() {
    return this.buyersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buyersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuyerDto: UpdateBuyerDto) {
    return this.buyersService.update(+id, updateBuyerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buyersService.remove(+id);
  }
}
