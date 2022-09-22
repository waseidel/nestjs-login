import { Test, TestingModule } from '@nestjs/testing';
import { JerarquiasService } from './jerarquias.service';

describe('JerarquiasService', () => {
  let service: JerarquiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JerarquiasService],
    }).compile();

    service = module.get<JerarquiasService>(JerarquiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
