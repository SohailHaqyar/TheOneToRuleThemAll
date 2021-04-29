import { Field, ObjectType } from '@nestjs/graphql';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
export abstract class CreatableEntity {
  @Field(() => Date)
  @CreateDateColumn()
  created_at: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updated_at: Date;
}
