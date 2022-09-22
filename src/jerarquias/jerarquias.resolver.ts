import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { JerarquiasService } from './jerarquias.service';
import { Jerarquia } from './entities/jerarquia.entity';
import { CreateJerarquiaInput } from './dto/create-jerarquia.input';
import { UpdateJerarquiaInput } from './dto/update-jerarquia.input';

@Resolver(() => Jerarquia)
export class JerarquiasResolver {
  constructor(private readonly jerarquiasService: JerarquiasService) {}

  @Mutation(() => Jerarquia)
  createJerarquia(@Args('createJerarquiaInput') createJerarquiaInput: CreateJerarquiaInput) {
    return this.jerarquiasService.create(createJerarquiaInput);
  }

  @Query(() => [Jerarquia], { name: 'jerarquias' })
  findAll() {
    return this.jerarquiasService.findAll();
  }

  @Query(() => Jerarquia, { name: 'jerarquia' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.jerarquiasService.findOne(id);
  }

  @Mutation(() => Jerarquia)
  updateJerarquia(@Args('updateJerarquiaInput') updateJerarquiaInput: UpdateJerarquiaInput) {
    return this.jerarquiasService.update(updateJerarquiaInput.id, updateJerarquiaInput);
  }

  @Mutation(() => Jerarquia)
  removeJerarquia(@Args('id', { type: () => Int }) id: number) {
    return this.jerarquiasService.remove(id);
  }
}
