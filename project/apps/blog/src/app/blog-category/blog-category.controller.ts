import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BlogCategoryService } from './blog-category.service';
import { CategoryRdo } from './rdo/category.rdo';
import { fillObject } from '@project/util/util-core';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class BlogCategoryController {
  constructor(private readonly blogCategoryService: BlogCategoryService) {}

  @Get('/:id')
  public async show(@Param('id') id: string) {
    const categoryId = parseInt(id, 10);
    const existCategory = await this.blogCategoryService.getCategory(
      categoryId
    );

    return fillObject(CategoryRdo, existCategory);
  }

  @Get('/')
  public async index() {
    const categories = await this.blogCategoryService.getCategories();
    return fillObject(CategoryRdo, categories);
  }

  @Post('/')
  public async create(@Body() dto: CreateCategoryDto) {
    const newCategory = await this.blogCategoryService.createCategory(dto);
    return fillObject(CategoryRdo, newCategory);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async destroy(@Param('id') id: string) {
    const categoryId = parseInt(id, 10);
    this.blogCategoryService.deleteCategory(categoryId);
  }

  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
    const categoryId = parseInt(id, 10);
    const updatedCategory = await this.blogCategoryService.updateCategory(
      categoryId,
      dto
    );
    return fillObject(CategoryRdo, updatedCategory);
  }
}
