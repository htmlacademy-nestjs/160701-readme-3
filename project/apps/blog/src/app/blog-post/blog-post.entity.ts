import { Entity } from '@project/util/util-types';
import { Post, Category, Comment } from '@project/shared/shared-types';

export class BlogPostEntity implements Entity<BlogPostEntity>, Post {
  public id: number;
  public content: string;
  public createdAt: Date;
  public publishAt: Date;
  public userId: string;
  public comments: Comment[];
  public categories: Category[];

  constructor(post: Post) {
    this.fillEntity(post);
  }

  public fillEntity({ content, userId, categories }: Post): void {
    this.content = content;
    this.createdAt = new Date();
    this.publishAt = new Date();
    this.userId = userId;
    this.comments = [];
    this.categories = [...categories];
  }

  public toObject(): BlogPostEntity {
    return {
      ...this,
      categories: [...this.categories],
      comments: [...this.comments],
    };
  }
}
