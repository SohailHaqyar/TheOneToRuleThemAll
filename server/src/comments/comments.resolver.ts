import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GetUser } from '../auth/current-user.decorator';
import { Post } from '../posts/entities/post.entity';
import { User } from '../users/entities/user.entity';
import { CommentsService } from './comments.service';
import { CreateCommentInput } from './dto/create-comment.dto';

@Resolver()
export class CommentsResolver {
  constructor(private commentsService: CommentsService) {}

  @Mutation(() => Post)
  addComment(
    @GetUser() user: User,
    @Args('createPostInput') createCommentInput: CreateCommentInput,
  ) {
    return this.commentsService.create(createCommentInput, user);
  }

  @Mutation(() => String)
  removeComment(
    @GetUser() user: User,
    @Args({ name: 'commentId', type: () => String }) commentId: string,
  ) {
    return this.commentsService.delete(commentId, user);
  }
}
