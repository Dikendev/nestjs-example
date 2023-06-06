import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  async findOneById(id: string): Promise<Comment> {
    const options: FindOneOptions<Comment> = {
      where: { id },
    };
    return this.commentRepository.findOne(options);
  }

  async createOrUpdate(newComment: Comment): Promise<Comment> {
    return this.commentRepository.create(newComment);
  }
}
