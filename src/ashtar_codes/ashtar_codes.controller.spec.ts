import { Test, TestingModule } from '@nestjs/testing';
import { AshtarCodesController } from './ashtar_codes.controller';
import { AshtarCodesService } from './ashtar_codes.service';

describe('AshtarCodesController', () => {
  let controller: AshtarCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AshtarCodesController],
      providers: [AshtarCodesService],
    }).compile();

    controller = module.get<AshtarCodesController>(AshtarCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
