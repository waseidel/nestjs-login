import { CreateLineaInput } from './create-linea.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLineaInput extends PartialType(CreateLineaInput) {
  @Field(() => Int)
  _id: number;
}
