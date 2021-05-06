import { UseGuards } from '@nestjs/common';
import {
  Args,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { GetUser } from '../auth/current-user.decorator';
import { GqlAuthGuard } from '../auth/guards/gql-auth';
import { User } from './entities/user.entity';
import { RegisterUserInput } from './dto/register.dto';
import { UsersService } from './users.service';

@ObjectType()
class MeResponse {
  @Field()
  id: string;

  @Field()
  @Field()
  email: string;

  @Field()
  username: string;
}

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  @UseGuards(GqlAuthGuard)
  users() {
    return this.usersService.getUsers();
  }

  @Query(() => MeResponse)
  @UseGuards(GqlAuthGuard)
  me(@GetUser() user: User) {
    return user;
  }

  @Mutation(() => User)
  register(@Args('registerUserInput') registerUserInput: RegisterUserInput) {
    return this.usersService.create(registerUserInput);
  }
}
