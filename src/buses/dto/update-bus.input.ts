import { CreateBusInput } from './create-bus.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBusInput extends PartialType(CreateBusInput) {
  @Field(() => Int)
  id: number;
}
