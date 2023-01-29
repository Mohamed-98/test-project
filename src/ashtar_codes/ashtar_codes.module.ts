import { Module } from '@nestjs/common';
import { AshtarCodesService } from './ashtar_codes.service';
import { AshtarCodesController } from './ashtar_codes.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AshtarCodesController],
  providers: [AshtarCodesService, PrismaService],
})
export class AshtarCodesModule {}
