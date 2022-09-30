import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { Tipo } from '../types/casos.types';
import { Bus } from '../../buses/entities/bus.entity';
import { Jerarquia } from '../../jerarquias/entities/jerarquia.entity';
import { Linea } from '../../lineas/entities/linea.entity';
import { User } from '../../users/entities/user.entity';

export type CasoDocument = Caso & Document;

@Schema({ timestamps: true })
@ObjectType()
export class Caso {
  @Field(() => ID, { nullable: true })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  @Field()
  caso: string;

  @Prop()
  @Field(() => GraphQLISODateTime)
  hora: Date;

  @Prop()
  @Field(() => Tipo, { nullable: true })
  tipo?: Tipo;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Jerarquia.name })
  @Field(() => Jerarquia, { nullable: true })
  jerarquia?: Jerarquia;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Bus.name })
  @Field(() => Bus, { nullable: true })
  bus?: Bus;

  tarea: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Linea.name })
  @Field(() => Linea, { nullable: true })
  linea?: Linea;

  @Prop()
  @Field()
  viaje: string;

  @Prop()
  @Field()
  parada: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  @Field(() => User, { nullable: true })
  user?: User;
}

export const CasoSchema = SchemaFactory.createForClass(Caso);
