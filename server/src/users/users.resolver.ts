import { UseGuards } from '@nestjs/common';
import {
  Args,
  Context,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { AuthGuard } from './auth.gaurd';
import { User } from './entities/user.model';
import { LoginUserInput } from './input-types/login.input';
import { RegisterUserInput } from './input-types/register.input';
import { UsersService } from './users.service';

@ObjectType()
class LoginResponse {
  @Field()
  token: string;
}

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}
  @Query(() => User)
  @UseGuards(new AuthGuard())
  me(@Context('user') user: User) {
    return user;
  }

  @Mutation(() => User)
  register(@Args('registerUserInput') registerUserInput: RegisterUserInput) {
    return this.usersService.create(registerUserInput);
  }

  @Mutation(() => LoginResponse)
  login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.usersService.loginUser(loginUserInput);
  }
}
