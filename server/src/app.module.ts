import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';
import { User } from './users/entities/user.model';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'db',
      entities: [User],
      synchronize: true,
      logging: false,
      retryAttempts: 1,
    }),
    AuthorModule,
    GraphQLModule.forRoot({
      debug: false,
      autoSchemaFile: true,
      context: ({ req }) => ({ headers: req.headers }),
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
