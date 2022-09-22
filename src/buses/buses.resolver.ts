import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BusesService } from './buses.service';
import { Bus } from './entities/bus.entity';
import { CreateBusInput } from './dto/create-bus.input';
import { UpdateBusInput } from './dto/update-bus.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver(() => Bus)
export class BusesResolver {
  constructor(private readonly busesService: BusesService) {}

  @Mutation(() => Bus)
  @UseGuards(JwtAuthGuard)
  createBus(@Args('createBusInput') createBusInput: CreateBusInput) {
    return this.busesService.create(createBusInput);
  }

  @Query(() => [Bus], { name: 'buses' })
  findAll() {
    return this.busesService.findAll();
  }

  @Query(() => Bus, { name: 'bus' })
  findOne(@Args('mc', { type: () => Int }) mc: string) {
    return this.busesService.findOne(mc);
  }

  @Mutation(() => Bus)
  updateBus(@Args('updateBusInput') updateBusInput: UpdateBusInput) {
    return this.busesService.update(updateBusInput.id, updateBusInput);
  }

  @Mutation(() => Bus)
  removeBus(@Args('id', { type: () => Int }) id: number) {
    return this.busesService.remove(id);
  }
}
