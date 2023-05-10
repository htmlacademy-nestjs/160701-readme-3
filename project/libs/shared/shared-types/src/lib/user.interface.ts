import { UserRole } from './user-role.enum';

export interface User {
  _id?: string;
  email: string;
  firstName: string;
  lastName: string;
  dateBirth: Date;
  avatar: string;
  passwordHash: string;
  role: UserRole;
}
