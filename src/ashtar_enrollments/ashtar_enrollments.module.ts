import { Module } from '@nestjs/common';
import { AshtarEnrollmentsService } from './ashtar_enrollments.service';
import { AshtarEnrollmentsController } from './ashtar_enrollments.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AshtarEnrollmentsController],
  providers: [AshtarEnrollmentsService, PrismaService],
})
export class AshtarEnrollmentsModule {}
