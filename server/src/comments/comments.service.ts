import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../posts/entities/post.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateCommentInput } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(createCommentInput: CreateCommentInput, user: User) {
    const { postId, body } = createCommentInput;
    const post = await this.postRepository.findOne({ where: { id: postId } });
    // Create the comment
    const comment = await this.commentsRepository.save(
      this.commentsRepository.create({ post, body }),
    );

    post.comments.unshift(comment);
    return await this.postRepository.save(post);
  }

  async delete(id: string, user: User) {
    const comment = await this.commentsRepository.findOne({
      id,
      user: user,
    });
    if (comment) {
      throw new UnauthorizedException(`Comment not found`);
    }
    const result = await this.commentsRepository.delete(id);
    return `Affected Rows: ${result.affected} |`;
  }
}
