import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { Caso } from '../../casos/entities/caso.entity';

@Schema({ timestamps: true })
@ObjectType()
export class Linea {
  @Prop()
  @Field(() => ID, { nullable: true })
  id?: string;

  @Prop()
  @Field()
  nombre: string;

  @Prop()
  @Field(() => [Caso], { nullable: true })
  casos?: Caso[];
}
