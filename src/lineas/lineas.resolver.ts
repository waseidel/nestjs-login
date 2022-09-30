import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LineasService } from './lineas.service';
import { Linea } from './entities/linea.entity';
import { CreateLineaInput } from './dto/create-linea.input';
import { UpdateLineaInput } from './dto/update-linea.input';

@Resolver(() => Linea)
export class LineasResolver {
  constructor(private readonly lineasService: LineasService) {}

  @Mutation(() => Linea)
  createLinea(@Args('createLineaInput') createLineaInput: CreateLineaInput) {
    return this.lineasService.create(createLineaInput);
  }

  @Query(() => [Linea], { name: 'lineas' })
  findAll() {
    return this.lineasService.findAll();
  }

  @Query(() => Linea, { name: 'linea' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.lineasService.findOne(id);
  }

  @Mutation(() => Linea, {name: 'updateLinea'})
  updateLinea(@Args('updateLineaInput') updateLineaInput: UpdateLineaInput) {
    return this.lineasService.update(updateLineaInput._id, updateLineaInput);
  }

  @Mutation(() => Linea, {name: 'removeLinea'})
  removeLinea(@Args('id', { type: () => Int }) id: number) {
    return this.lineasService.remove(id);
  }
}
