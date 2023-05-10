import { Injectable } from '@nestjs/common';
import { BlogCategoryRepository } from './blog-category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from '@project/shared/shared-types';
import { BlogCategoryEntity } from './blog-category.entity';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class BlogCategoryService {
  constructor(
    private readonly blogCategoryRepository: BlogCategoryRepository
  ) {}

  public async createCategory(dto: CreateCategoryDto): Promise<Category> {
    const categoryEntity = new BlogCategoryEntity(dto);

    return this.blogCategoryRepository.create(categoryEntity);
  }

  public async deleteCategory(id: number): Promise<void> {
    this.blogCategoryRepository.destroy(id);
  }

  public async getCategory(id: number): Promise<Category | null> {
    return this.blogCategoryRepository.findById(id);
  }

  public async updateCategory(
    id: number,
    dto: UpdateCategoryDto
  ): Promise<Category> {
    return this.blogCategoryRepository.update(id, new BlogCategoryEntity(dto));
  }

  public async getCategories(): Promise<Category[]> {
    return this.blogCategoryRepository.find();
  }
}
