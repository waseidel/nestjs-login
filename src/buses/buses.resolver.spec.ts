import { Test, TestingModule } from '@nestjs/testing';
import { BusesResolver } from './buses.resolver';
import { BusesService } from './buses.service';

describe('BusesResolver', () => {
  let resolver: BusesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusesResolver, BusesService],
    }).compile();

    resolver = module.get<BusesResolver>(BusesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
