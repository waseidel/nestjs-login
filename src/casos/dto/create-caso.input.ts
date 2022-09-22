import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCasoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
