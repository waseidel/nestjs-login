import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserResponse {
  @Field(() => ID, { nullable: true })
  _id: string;

  @Field({ nullable: true })
  name: string;

  @Field()
  email: string;

  @Field(() => GraphQLISODateTime, {nullable: true})
  createdAt: Date;

  @Field(() => GraphQLISODateTime, {nullable: true})
  updatedAt: Date;
}
