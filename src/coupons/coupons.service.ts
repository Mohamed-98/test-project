import { Injectable } from '@nestjs/common';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CouponsService {
  constructor(private prisma: PrismaService) {}

  create(createCouponDto: CreateCouponDto) {
    return 'This action adds a new coupon';
  }

  async findManyOwner(Owner: number) {
    const students = await this.prisma.coupons.findMany({
      where: {
        owner: Owner,
      },
    });
    return students;
  }

  async findManyTitle(title: any) {
    const students = await this.prisma.coupons.findMany({
      where: {
        title: title,
      },
    });
    return students;
  }

  findAll() {
    return `This action returns all coupons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coupon`;
  }

  update(id: number, updateCouponDto: UpdateCouponDto) {
    return `This action updates a #${id} coupon`;
  }

  remove(id: number) {
    return `This action removes a #${id} coupon`;
  }
}
