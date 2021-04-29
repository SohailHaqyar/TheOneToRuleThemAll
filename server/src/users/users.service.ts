import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcryptjs';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { RegisterUserInput } from './dto/register.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(registerUserInput: RegisterUserInput) {
    registerUserInput.password = await hash(registerUserInput.password, 10);
    const user = await this.usersRepository.save(
      this.usersRepository.create({ ...registerUserInput }),
    );
    return user;
  }
  async getUserByEmail(email: string) {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async getUsers() {
    return await this.usersRepository.find();
  }
}
