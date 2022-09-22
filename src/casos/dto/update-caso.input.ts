import { CreateCasoInput } from './create-caso.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCasoInput extends PartialType(CreateCasoInput) {
  @Field(() => Int)
  id: number;
}
