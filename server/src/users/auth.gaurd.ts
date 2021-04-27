import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();
    console.log(ctx.headers.Authorization);
    if (!ctx.headers.Authorization) return false;

    ctx.user = this.validateToken(ctx.headers.Authorization);
    return true;
  }

  validateToken(auth: string) {
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);
    }

    const token = auth.split(' ')[1];

    try {
      return verify(token, 'SECRET_01');
    } catch (e) {
      throw new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);
    }
  }
}
