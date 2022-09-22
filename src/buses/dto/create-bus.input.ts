import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBusInput {
  @Field()
  mc: string;

  @Field()
  placa: string;
}
