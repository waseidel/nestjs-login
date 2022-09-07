import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {
  @Prop()
  @Field()
  name: string;

  @Prop({ unique: true })
  @Field()
  email: string;

  @Prop()
  @Field()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
