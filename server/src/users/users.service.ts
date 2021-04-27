import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { User } from './entities/user.model';
import { LoginUserInput } from './input-types/login.input';
import { RegisterUserInput } from './input-types/register.input';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  createToken({ id, username }: User) {
    return sign({ id, username }, 'SECRET_01');
  }

  async create(loginUserInput: RegisterUserInput) {
    loginUserInput.password = await hash(loginUserInput.password, 10);
    console.log(loginUserInput);
    const user = await this.usersRepository.save(
      this.usersRepository.create({ ...loginUserInput }),
    );
    return user;
  }

  async loginUser(loginUserInput: LoginUserInput) {
    const { username, password } = loginUserInput;
    const user = await this.usersRepository.findOne({ where: { username } });
    if (user) {
      return { token: this.createToken(user) };
    } else return 'Fuck off';
  }
}
