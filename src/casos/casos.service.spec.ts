import { Test, TestingModule } from '@nestjs/testing';
import { CasosService } from './casos.service';

describe('CasosService', () => {
  let service: CasosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CasosService],
    }).compile();

    service = module.get<CasosService>(CasosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
