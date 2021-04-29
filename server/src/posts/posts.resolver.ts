import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GetUser } from 'src/auth/current-user.decorator';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth';
import { User } from 'src/users/entities/user.entity';
import { CreatePostInput } from './dto/create-post.dto';
import { Post } from './entities/post.entity';
import { PostsService } from './posts.service';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private postsService: PostsService) {}
  @Query(() => [Post], { nullable: true })
  @UseGuards(GqlAuthGuard)
  getPosts() {
    return this.postsService.getPosts();
  }

  @Mutation(() => Post)
  @UseGuards(GqlAuthGuard)
  createPost(
    @GetUser() user: User,
    @Args('createPostInput') createPostInput: CreatePostInput,
  ) {
    return this.postsService.create(createPostInput, user);
  }
}
