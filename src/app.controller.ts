import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // findAll(@Query() query) {
  //   console.log('test findAll');
  //   const { limit, page } = query;
  //   // return this.appService.findAll(+limit, +page);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: number) {
  //   console.log('test findOne');
  //   // return this.appService.findOne(+id);
  // }
}
