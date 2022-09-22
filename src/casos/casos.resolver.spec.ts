import { Test, TestingModule } from '@nestjs/testing';
import { CasosResolver } from './casos.resolver';
import { CasosService } from './casos.service';

describe('CasosResolver', () => {
  let resolver: CasosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CasosResolver, CasosService],
    }).compile();

    resolver = module.get<CasosResolver>(CasosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
