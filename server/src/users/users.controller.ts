import { Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/github/oauth/:code')
  exchangeToken(@Param('code') code: string) {
    return this.userService.authenticateGithub(code);
  }
}
