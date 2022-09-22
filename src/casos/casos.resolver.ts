import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CasosService } from './casos.service';
import { Caso } from './entities/caso.entity';
import { CreateCasoInput } from './dto/create-caso.input';
import { UpdateCasoInput } from './dto/update-caso.input';

@Resolver(() => Caso)
export class CasosResolver {
  constructor(private readonly casosService: CasosService) {}

  @Mutation(() => Caso)
  createCaso(@Args('createCasoInput') createCasoInput: CreateCasoInput) {
    return this.casosService.create(createCasoInput);
  }

  @Query(() => [Caso], { name: 'casos' })
  findAll() {
    return this.casosService.findAll();
  }

  @Query(() => Caso, { name: 'caso' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.casosService.findOne(id);
  }

  @Mutation(() => Caso)
  updateCaso(@Args('updateCasoInput') updateCasoInput: UpdateCasoInput) {
    return this.casosService.update(updateCasoInput.id, updateCasoInput);
  }

  @Mutation(() => Caso)
  removeCaso(@Args('id', { type: () => Int }) id: number) {
    return this.casosService.remove(id);
  }
}
