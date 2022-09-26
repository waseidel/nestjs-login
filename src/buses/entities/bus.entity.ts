import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type BusDocument = Bus & Document;

@Schema({ timestamps: true })
@ObjectType()
export class Bus {
  @Field(() => ID, { nullable: true })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ unique: true })
  @Field()
  mc: string;

  @Prop({ unique: true })
  @Field({ nullable: true })
  placa?: string;
}

export const BusSchema = SchemaFactory.createForClass(Bus);
