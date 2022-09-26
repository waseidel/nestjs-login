import { InputType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { Tipo } from '../../types/casos.types';

@InputType()
export class CreateCasoInput {
  @Field()
  caso: string;

  @Field(() => GraphQLISODateTime)
  hora: Date;

  @Field()
  viaje: number;

  @Field()
  parada: string;

  @Field(() => Tipo)
  tipo: Tipo;

  @Field()
  jerarquia: string;

  @Field()
  bus: string;

  @Field()
  linea: string;
}
