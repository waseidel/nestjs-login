import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {
  @Prop()
  @Field({ nullable: true })
  name?: string;

  @Prop({ unique: true })
  @Field()
  email: string;

  @Prop()
  @Field({ nullable: true })
  password?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
