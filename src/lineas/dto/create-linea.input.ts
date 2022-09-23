import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLineaInput {
  @Field()
  nombre: string;

  @Field()
  tipologia:string;
}
