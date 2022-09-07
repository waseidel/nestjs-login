import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateUser {
  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  email: string;
}
