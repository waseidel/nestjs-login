import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { Caso } from '../../casos/entities/caso.entity';

@Schema()
@ObjectType()
export class Jerarquia {
  @Prop()
  @Field(() => ID, { nullable: true })
  _id?: string;

  @Prop()
  @Field()
  nombre: string;

  @Prop()
  @Field(() => Boolean, { nullable: true, defaultValue: false })
  afecta_op?: Boolean;

  @Prop()
  @Field(() => [Caso], { nullable: true })
  casos?: Caso[];
}
