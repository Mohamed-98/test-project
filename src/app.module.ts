import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { AshtarCodesModule } from './ashtar_codes/ashtar_codes.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { AshtarEnrollmentsModule } from './ashtar_enrollments/ashtar_enrollments.module';
import { BuyersModule } from './buyers/buyers.module';
import { CodesModule } from './codes/codes.module';
import { CouponsModule } from './coupons/coupons.module';
import { ActivitiesModule } from './activities/activities.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    AshtarCodesModule,
    EnrollmentsModule,
    AshtarEnrollmentsModule,
    BuyersModule,
    CodesModule,
    CouponsModule,
    AshtarCodesModule,
    ActivitiesModule,
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
