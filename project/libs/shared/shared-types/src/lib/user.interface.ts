import { UserRole } from './user-role.enum.js';

export interface User {
  _id?: string;
  email: string;
  firstname: string;
  lastname: string;
  dateVirth: Date;
  avatar: string;
  passwordHash: string;
  role: UserRole;
}
