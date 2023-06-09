import { User, UserRole } from '@project/shared/shared-types';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity implements User {
  public _id?: string;
  public avatar: string;
  public dateBirth: Date;
  public email: string;
  public firstName: string;
  public lastName: string;
  public passwordHash: string;
  public role: UserRole;

  constructor(blogUser: User) {
    this.fillEntity(blogUser);
  }
  public toObject() {
    return { ...this };
  }
  public fillEntity(blogUser: User) {
    this._id = blogUser._id;
    this.avatar = blogUser.avatar;
    this.dateBirth = blogUser.dateBirth;
    this.email = blogUser.email;
    this.firstName = blogUser.firstName;
    this.lastName = blogUser.lastName;
    this.passwordHash = blogUser.passwordHash;
    this.role = blogUser.role;
  }
  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);

    return this;
  }
  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
