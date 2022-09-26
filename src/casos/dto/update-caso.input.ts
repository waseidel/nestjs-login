import { CreateCasoInput } from './create-caso.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import mongoose from 'mongoose';

@InputType()
export class UpdateCasoInput extends PartialType(CreateCasoInput) {
  @Field(() => ID)
  _id: mongoose.Schema.Types.ObjectId;
}
