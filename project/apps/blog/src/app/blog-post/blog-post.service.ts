import { Injectable } from '@nestjs/common';
import { BlogPostRepository } from './blog-post.repository';
import { BlogCategoryRepository } from '../blog-category/blog-category.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from '@project/shared/shared-types';
import { BlogPostEntity } from './blog-post.entity';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class BlogPostService {
  constructor(
    private readonly blogPostRepository: BlogPostRepository,
    private readonly blogCategoryRepository: BlogCategoryRepository
  ) {}

  public async createPost(dto: CreatePostDto): Promise<Post> {
    const categories = await this.blogCategoryRepository.find(dto.categories);

    const postEntity = new BlogPostEntity({ ...dto, categories, comments: [] });

    return this.blogPostRepository.create(postEntity);
  }

  public async deletePost(id: number): Promise<void> {
    this.blogPostRepository.destroy(id);
  }

  public async getPost(id: number): Promise<Post> {
    return this.blogPostRepository.findById(id);
  }

  public async getPosts(): Promise<Post[]> {
    return this.blogPostRepository.find();
  }

  public async updatePost(_id: number, _dto: UpdatePostDto): Promise<Post> {
    throw new Error('Not implemented...');
  }
}