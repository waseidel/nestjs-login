import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Caso } from '../../casos/entities/caso.entity';

export type LineaDocument = Linea & Document;

@Schema({ timestamps: true })
@ObjectType()
export class Linea {
  @Field(() => ID, { nullable: true })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  @Field()
  nombre: string;

  @Prop()
  @Field()
  tipologia: string;

  @Prop()
  @Field(() => [Caso], { nullable: true })
  casos?: Caso[];
}

export const LineaSchema = SchemaFactory.createForClass(Linea);
