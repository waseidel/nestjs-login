import {
  Field,
  GraphQLISODateTime,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Bus } from '../../buses/entities/bus.entity';
import { Jerarquia } from '../../jerarquias/entities/jerarquia.entity';
import { Linea } from '../../lineas/entities/linea.entity';
import { User } from '../../users/entities/user.entity';

enum Tipo {
  INCIDENTE,
  SALIDA,
  INGRESO,
}

registerEnumType(Tipo, {
  name: 'Tipo',
});

export type CasoDocument = Caso & Document;

@Schema({ timestamps: true })
@ObjectType()
export class Caso {
  @Prop()
  @Field()
  caso: string;

  @Prop()
  @Field(() => GraphQLISODateTime)
  hora: Date;

  @Prop()
  @Field(() => Tipo, { nullable: true })
  tipo?: Tipo;

  @Prop()
  @Field(() => Jerarquia, { nullable: true })
  jerarquia?: Jerarquia;

  @Prop()
  @Field(() => Bus, { nullable: true })
  bus?: Bus;

  tarea: string;

  @Prop()
  @Field(() => Linea, { nullable: true })
  linea?: Linea;

  @Prop()
  @Field()
  viaje: string;

  @Prop()
  @Field()
  parada: string;

  @Prop()
  @Field(() => User, { nullable: true })
  usuario?: User;
}

export const CasoSchema = SchemaFactory.createForClass(Caso);
