import { Test, TestingModule } from '@nestjs/testing';
import { JerarquiasResolver } from './jerarquias.resolver';
import { JerarquiasService } from './jerarquias.service';

describe('JerarquiasResolver', () => {
  let resolver: JerarquiasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JerarquiasResolver, JerarquiasService],
    }).compile();

    resolver = module.get<JerarquiasResolver>(JerarquiasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
