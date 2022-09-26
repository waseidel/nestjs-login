import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';

import { CasosService } from './casos.service';
import { Caso } from './entities/caso.entity';
import { CreateCasoInput } from './dto/create-caso.input';
import { UpdateCasoInput } from './dto/update-caso.input';
import mongoose from 'mongoose';
import { JerarquiasService } from '../jerarquias/jerarquias.service';
import { BusesService } from '../buses/buses.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LineasService } from '../lineas/lineas.service';
import { UsersService } from '../users/users.service';

@Resolver(() => Caso)
export class CasosResolver {
  constructor(
    private readonly casosService: CasosService,
    private readonly jerarquiasService: JerarquiasService,
    private readonly busesService: BusesService,
    private readonly lineasService: LineasService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => Caso)
  @UseGuards(JwtAuthGuard)
  createCaso(
    @Args('createCasoInput') createCasoInput: CreateCasoInput,
    @Context() context: any,
  ) {
    const { userid } = context.req.user;
    return this.casosService.create(createCasoInput, userid);
  }

  @Query(() => [Caso], { name: 'casos' })
  async findAll() {
    return await this.casosService.findAll();
  }

  @Query(() => Caso, { name: 'caso' })
  findOne(@Args('id', { type: () => ID }) _id: mongoose.Schema.Types.ObjectId) {
    return this.casosService.findOne(_id);
  }

  @Mutation(() => Caso)
  updateCaso(@Args('updateCasoInput') updateCasoInput: UpdateCasoInput) {
    return this.casosService.update(updateCasoInput._id, updateCasoInput);
  }

  @Mutation(() => Caso)
  removeCaso(
    @Args('id', { type: () => ID }) id: mongoose.Schema.Types.ObjectId,
  ) {
    return this.casosService.remove(id);
  }

  @ResolveField()
  async jerarquia(@Parent() caso: Caso) {
    const { jerarquia } = caso;
    return await this.jerarquiasService.findById(jerarquia);
  }

  @ResolveField()
  async bus(@Parent() caso: Caso) {
    const { bus } = caso;
    return await this.busesService.findById(bus);
  }

  @ResolveField()
  async linea(@Parent() caso: Caso) {
    const { linea } = caso;
    return await this.lineasService.findById(linea);
  }

  @ResolveField()
  async user(@Parent() caso: Caso) {
    const { user } = caso;
    if (!user) return undefined;
    return await this.usersService.findById(user);
  }
}
