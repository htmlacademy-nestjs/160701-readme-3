import { PostType } from './post-type.enum.js';

export interface Post {
  _id?: string;
  tag?: string[];
  type: PostType;
}
