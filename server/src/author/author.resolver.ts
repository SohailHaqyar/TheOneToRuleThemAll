import { Resolver, Query } from '@nestjs/graphql';
import { Author } from '../models/author.model';
import { AuthorService } from './author.service';

@Resolver((of) => Author)
export class AuthorResolver {
  constructor(private authorService: AuthorService) {}

  @Query((returns) => String)
  hello() {
    return 'Hello World';
  }
}
