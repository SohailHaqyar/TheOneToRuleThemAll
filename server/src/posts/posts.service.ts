import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async getPosts() {
    const results = await this.postRepository.find({ relations: ['user'] });
    console.log(results);
    return results;
  }

  async create(createPostInput: CreatePostInput, user: User) {
    return await this.postRepository.save(
      this.postRepository.create({
        ...createPostInput,
        user,
      }),
    );
  }
}
