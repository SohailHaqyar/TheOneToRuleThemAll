import { UseGuards } from '@nestjs/common';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Field,
  ObjectType,
} from '@nestjs/graphql';
import { GetUser } from 'src/auth/current-user.decorator';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth';
import { User } from 'src/users/entities/user.entity';
import { CreatePostInput } from './dto/create-post.dto';
import { UpdatePostInput } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { PostsService } from './posts.service';

@ObjectType()
export class DeleteResponse {
  @Field(() => Post)
  post: Post;

  @Field(() => Boolean)
  deleted: boolean;
}

@Resolver(() => Post)
export class PostsResolver {
  constructor(private postsService: PostsService) {}
  @Query(() => [Post], { nullable: true })
  @UseGuards(GqlAuthGuard)
  findAll() {
    return this.postsService.findAll();
  }

  @Query(() => Post)
  @UseGuards(GqlAuthGuard)
  findOne(
    @GetUser() user: User,
    @Args({ name: 'postId', type: () => String }) postId: string,
  ) {
    return this.postsService.findOne(postId, user);
  }

  @Mutation(() => Post)
  @UseGuards(GqlAuthGuard)
  createPost(
    @GetUser() user: User,
    @Args('createPostInput') createPostInput: CreatePostInput,
  ) {
    return this.postsService.create(createPostInput, user);
  }

  @Mutation(() => Post)
  @UseGuards(GqlAuthGuard)
  updatePost(
    @GetUser() user: User,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    return this.postsService.update(updatePostInput, user);
  }

  @Mutation(() => DeleteResponse)
  @UseGuards(GqlAuthGuard)
  deletePost(
    @GetUser() user: User,
    @Args({ name: 'postId', type: () => String }) postId: string,
  ) {
    return this.postsService.delete(postId, user);
  }
}
