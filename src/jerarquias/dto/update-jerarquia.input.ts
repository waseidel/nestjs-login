import { CreateJerarquiaInput } from './create-jerarquia.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import mongoose from 'mongoose';

@InputType()
export class UpdateJerarquiaInput extends PartialType(CreateJerarquiaInput) {
  @Field(() => ID)
  id: mongoose.Schema.Types.ObjectId;
}
