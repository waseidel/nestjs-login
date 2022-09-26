import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {
  @Field(() => ID, { nullable: true })
  _id: mongoose.Schema.Types.ObjectId;

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
