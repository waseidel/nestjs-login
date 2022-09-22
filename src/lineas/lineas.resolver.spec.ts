import { Test, TestingModule } from '@nestjs/testing';
import { LineasResolver } from './lineas.resolver';
import { LineasService } from './lineas.service';

describe('LineasResolver', () => {
  let resolver: LineasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LineasResolver, LineasService],
    }).compile();

    resolver = module.get<LineasResolver>(LineasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
