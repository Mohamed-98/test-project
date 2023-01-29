import { Test, TestingModule } from '@nestjs/testing';
import { AshtarCodesService } from './ashtar_codes.service';

describe('AshtarCodesService', () => {
  let service: AshtarCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AshtarCodesService],
    }).compile();

    service = module.get<AshtarCodesService>(AshtarCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
