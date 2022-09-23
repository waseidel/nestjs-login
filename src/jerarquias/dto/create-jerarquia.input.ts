import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateJerarquiaInput {
  @Field()
  nombre: string;

  @Field({ nullable: true })
  afecta_op: Boolean;
}
