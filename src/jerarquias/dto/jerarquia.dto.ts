import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Caso } from '../../casos/entities/caso.entity';

@ObjectType()
export class JerarquiaResponse {
  @Field(() => ID, { nullable: true })
  _id: string;

  @Field({ nullable: true })
  nombre?: string;

  @Field(() => Boolean, {nullable: true})
  afecta?: boolean;

  @Field(() => [Caso], { nullable: true })
  casos?: Caso[];

}
