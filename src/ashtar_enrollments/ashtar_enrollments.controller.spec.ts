import { Test, TestingModule } from '@nestjs/testing';
import { AshtarEnrollmentsController } from './ashtar_enrollments.controller';
import { AshtarEnrollmentsService } from './ashtar_enrollments.service';

describe('AshtarEnrollmentsController', () => {
  let controller: AshtarEnrollmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AshtarEnrollmentsController],
      providers: [AshtarEnrollmentsService],
    }).compile();

    controller = module.get<AshtarEnrollmentsController>(AshtarEnrollmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
