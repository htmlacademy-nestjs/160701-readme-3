import { PostType } from './post-type.enum.js';
import { Comment } from './comment.interface';
import { Category } from './category.interface';

export interface Post {
  _id?: string;
  tag?: string[];
  // type: PostType;
  createdAt?: Date;
  publishAt?: Date;
  comments: Comment[];
  userId: string;
  content: string;
  categories: Category[];
}
