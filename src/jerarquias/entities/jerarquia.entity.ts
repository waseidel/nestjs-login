import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Caso } from '../../casos/entities/caso.entity';

export type JerarquiaDocument = Jerarquia & Document;

@Schema({ timestamps: true })
@ObjectType()
export class Jerarquia {
  @Prop()
  @Field()
  nombre: string;

  @Prop({ required: false })
  @Field(() => Boolean, { nullable: true, defaultValue: false })
  afecta_op?: Boolean;

  @Prop({ required: false })
  @Field(() => [Caso], { nullable: true })
  casos?: Caso[];
}

export const JerarquiaSchema = SchemaFactory.createForClass(Jerarquia);
