import { CreateJerarquiaInput } from './create-jerarquia.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateJerarquiaInput extends PartialType(CreateJerarquiaInput) {
  @Field(() => Int)
  id: number;
}
