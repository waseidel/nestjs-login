import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLineaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
