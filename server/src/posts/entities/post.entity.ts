import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CreatableEntity } from '../../classes/creatables';

@ObjectType()
@Entity()
export class Post extends CreatableEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  body: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
