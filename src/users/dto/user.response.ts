import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserResponse {
  @Field(() => ID, { nullable: true })
  _id: string;

  @Field({ nullable: true })
  name: string;

  @Field()
  email: string;
}
