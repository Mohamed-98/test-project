import { Test, TestingModule } from '@nestjs/testing';
import { AshtarEnrollmentsService } from './ashtar_enrollments.service';

describe('AshtarEnrollmentsService', () => {
  let service: AshtarEnrollmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AshtarEnrollmentsService],
    }).compile();

    service = module.get<AshtarEnrollmentsService>(AshtarEnrollmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
