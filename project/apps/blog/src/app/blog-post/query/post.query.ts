import {
  DEFAULT_POST_COUNT_LIMIT,
  DEFAULT_POST_SORT_DIRECTION,
} from '../blog-post.constant';
import { IsArray, IsIn, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class PostQuery {
  @Transform(({ value }) => Number(value) || DEFAULT_POST_COUNT_LIMIT)
  @IsNumber()
  @IsOptional()
  public limit = DEFAULT_POST_COUNT_LIMIT;

  @Transform(({ value }) =>
    value.split(',').map((categoryId) => Number(categoryId))
  )
  @IsArray()
  @IsOptional()
  public categories?: number[];

  @IsIn(['asc', 'desc'])
  @IsOptional()
  public sortDirection: 'desc' | 'asc' = DEFAULT_POST_SORT_DIRECTION;

  @Transform((value) => Number(value))
  @IsOptional()
  public page: number;
}
